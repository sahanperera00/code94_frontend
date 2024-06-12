export const SET_DELETE_PRODUCT_ID = "SET_DELETE_PRODUCT_ID";

export const setDeleteProductId = (productId) => {
  return {
    type: SET_DELETE_PRODUCT_ID,
    payload: productId,
  };
};
