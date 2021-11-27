export const getActiveItemStatus = (array) => {
  if (array.filter((elem) => !elem.is_deleted).length > 0) return true;
  return false;
};

export const getPendingItemStatus = (array) =>{
    if (array.filter((elem) => !elem.is_deleted && !elem.is_purchased).length > 0) return true;
  return false;
}
