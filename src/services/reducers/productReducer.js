import { SET_DELETE_PRODUCT_ID } from "../actions/productActions.js";

const initialState = {
  deleteProductId: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DELETE_PRODUCT_ID:
      return {
        ...state,
        deleteProductId: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
