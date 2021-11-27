import "./index.css";
import React from "react";
import GroceryItemCard from "../../components/GroceryItemCard";
import NoData from "../../components/Nodata";
import { useSelector } from "react-redux";
import { getActiveItemStatus } from "../../utils/general";

//edit grocery items component
const Edit = () => {
  const groceryItems = useSelector((state) => state);
  return (
    <div className="edit-parent">
      <div className="left-edit">
        {getActiveItemStatus(groceryItems) ? (
          <ul>
            {groceryItems.map((elem, idx) => {
              if (!elem.is_deleted)
                return (
                  <GroceryItemCard
                    title={elem}
                    key={idx}
                    groceryItem={elem}
                    fromFlag
                  />
                );
            })}
          </ul>
        ) : (
          <NoData from="edit" />
        )}
      </div>
    </div>
  );
};

export default Edit;
