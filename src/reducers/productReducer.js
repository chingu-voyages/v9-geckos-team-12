import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SELECT_CATEGORY,
  CARD_SELECT_BY_ID,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_READY,
  ADD_CART_COUNT
} from "../actions/productActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  category: "",
  id: 1,
  item: [],
  cartCount: 0
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: true,
        item: action.payload.item
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        loading: false,
        category: action.category
      };
    case CARD_SELECT_BY_ID:
      return {
        ...state,
        loading: true,
        id: action.id
      };
    case FETCH_READY:
      return {
        ...state,
        loading: false
      };
    case ADD_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1
      };
    default:
      return state;
  }
}
