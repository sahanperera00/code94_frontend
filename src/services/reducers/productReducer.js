import { SET_EDIT_PRODUCT_ID } from "../actions/productActions.js";

const initialState = {
  productId: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
