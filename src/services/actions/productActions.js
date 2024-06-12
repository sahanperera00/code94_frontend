export const SET_EDIT_PRODUCT_ID = "SET_EDIT_PRODUCT_ID";

export const setEditProductId = (productId) => {
  return {
    type: SET_EDIT_PRODUCT_ID,
    payload: productId,
  };
};
