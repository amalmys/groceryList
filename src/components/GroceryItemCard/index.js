import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// the grocery card component
const GroceryItemCard = ({ fromFlag, groceryItem }) => {
  const groceryItems = useSelector((state) => state);
  const currentGroceryItem = groceryItems.filter(
    (elem) => elem.item === groceryItem.item
  )[0];
  const dispatch = useDispatch();
  const handleClick = (action) => {
    const { item } = currentGroceryItem;
    switch (action) {
      case "delete":
        dispatch({ type: "DEL_ITEM", item: item });
        break;
      // case "edit":
      //   dispatch({ type: "EDIT", item: item });
      //   break;
      case "purchase":
        dispatch({ type: "PURCHASE", item: item });
        break;
      case "add":
        dispatch({ type: "ADD", item: item });
        break;
      default:
        break;
    }
  };
  return (
    <div className="cards-container">
      <div className="grocery-card">
        <div
          className="left-portion"
          style={
            currentGroceryItem.is_purchased
              ? { color: "var(--black)", textDecoration: "line-through" }
              : { color: "var(--green)" }
          }
        >
          {currentGroceryItem.count > 1 ? (
            <span style={{ color: "var(--text-grey)" }}>
              {currentGroceryItem.count}
            </span>
          ) : (
            ""
          )}{" "}
          {currentGroceryItem.item}
        </div>
        {fromFlag && (
          <div className="right-portion">
            <button
              className="add-button button-size"
              onClick={() => handleClick("delete")}
            >
              DELETE
            </button>
            {/* <button onClick={() => handleClick("edit")}>EDIT</button> */}
            {!currentGroceryItem.is_purchased && (
              <button
                className="add-button button-size"
                onClick={() => handleClick("purchase")}
              >
                PURCHASE
              </button>
            )}
            <button
              className="add-button button-size"
              onClick={() => handleClick("add")}
            >
              ADD
            </button>
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default GroceryItemCard;
