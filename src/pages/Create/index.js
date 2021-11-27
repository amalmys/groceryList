import "./index.css";
import React, { useEffect, useRef, useState } from "react";
import GroceryItemCard from "../../components/GroceryItemCard";
import NoData from "../../components/Nodata";
import { useDispatch, useSelector } from "react-redux";
import { getActiveItemStatus, getPendingItemStatus } from "../../utils/general";

// component to add items to grocery list
const Create = () => {
  const [groceryItem, setGroceryItem] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const groceryItems = useSelector((state) => state);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function addGrocery(item) {
    return { type: "ADD_ITEM", item: item };
  }

  function clearAll() {
    return { type: "DEL_ALL" };
  }

  function addAll() {
    return { type: "ADD_ALL" };
  }

  function handleChange(event) {
    const item = event.target.value;
    setGroceryItem(item);
  }
  return (
    <div className="create-parent">
      <div className="left-create">
        {getActiveItemStatus(groceryItems) ? (
          <ul>
            {groceryItems.map((item, idx) => {
              if (!item.is_deleted)
                return <GroceryItemCard key={idx} groceryItem={item} />;
            })}
          </ul>
        ) : (
          <NoData from="create" />
        )}
      </div>
      <div className="right-create">
        <form
          layout="vertical"
          onSubmit={(event) => {
            event.preventDefault();
            if (!groceryItem) {
              setError("Please enter a grocery item");
              return;
            } else if (!isNaN(groceryItem)) {
              setError("Please do not enter numbers");
              return;
            } else setError("");
            dispatch(addGrocery(groceryItem));
            inputRef.current.value = "";
          }}
        >
          <input
            id="task"
            className="input-grocery"
            type="text"
            placeholder="Enter Grocery Item"
            ref={inputRef}
            value={groceryItem}
            onChange={(event) => handleChange(event)}
          />
          {error && <div className="error-message">{error}</div>}
          <button className="add-button" type="submit">
            ADD ITEM
          </button>
        </form>
        {getActiveItemStatus(groceryItems) ? (
          <button
            className="add-button button-margin"
            style={{ backgroundColor: "var(--error-red)" }}
            type="submit"
            onClick={() => dispatch(clearAll())}
          >
            CLEAR ALL
          </button>
        ) : (
          <button
            className="add-button button-margin"
            type="submit"
            onClick={() => dispatch(addAll())}
          >
            ADD ALL
          </button>
        )}
      </div>
    </div>
  );
};

export default Create;
