import { createStore } from "redux";

const initState = [
  { item: "Milk", count: 0, is_deleted: false, is_purchased: false },
  { item: "Bread", count: 0, is_deleted: false, is_purchased: false },
  { item: "Chocolate", count: 0, is_deleted: false, is_purchased: false },
  { item: "Spinach", count: 0, is_deleted: false, is_purchased: false },
  { item: "Eggs", count: 0, is_deleted: false, is_purchased: false },
];

const groceryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.filter((elem) => elem.item === action.item).length > 0)
        return state.map((elem) => {
          if (elem.item === action.item && !elem.is_deleted) {
            if (elem.is_purchased)
              return { ...elem, count: 0, is_purchased: false };
            else return { ...elem, count: elem.count + 1 };
          } else if (elem.item === action.item && elem.is_deleted)
            return {
              ...elem,
              count: 0,
              is_purchased: false,
              is_deleted: false,
            };
          else return elem;
        });
      return [
        ...state,
        { item: action.item, is_deleted: false, is_purchased: false, count: 0 },
      ];
    case "DEL_ITEM":
      return state.map((elem) => {
        if (elem.item === action.item) {
          return { ...elem, is_deleted: true, count: 0 };
        } else return elem;
      });

    case "DEL_ALL":
      return state.map((elem) => {
        return { ...elem, is_deleted: false, is_purchased: false, count: 0 };
      });

    case "ADD_ALL":
      return state.map((elem) => {
        return {
          ...elem,
          is_deleted: false,
          count: elem.count + 1,
          is_purchased: false,
        };
      });
    case "ADD":
      return state.map((elem) => {
        if (elem.item === action.item && !elem.is_deleted) {
          if (elem.is_purchased)
            return { ...elem, count: 0, is_purchased: false };
          else return { ...elem, count: elem.count + 1 };
        } else return elem;
      });
    // case "EDIT":
    //   return state.map((elem) => {
    //     return { ...elem, is_edit: true };
    //   });
    case "PURCHASE":
      return state.map((elem) => {
        if (elem.item === action.item && !elem.is_deleted)
          return { ...elem, is_purchased: true, count: 0 };
        else return elem;
      });
    case "UPDATE_COUNT":
      return state.map((elem) => {
        if (elem.item === action.item && !elem.is_deleted)
          return { ...elem, is_purchased: false, count: action.count };
        else return elem;
      });

    default:
      return state;
  }
};

const groceryStore = createStore(groceryReducer);

export default groceryStore;
