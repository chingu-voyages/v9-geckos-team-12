import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SELECT_CATEGORY,
  CARD_SELECT_BY_ID,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_READY,
  ADD_BASKET_COUNT,
  ADD_ITEM_TO_BASKET,
  REMOVE_ITEM_FROM_BASKET,
  FETCH_MORE_PRODUCTS_SUCCESS,
  FETCH_MORE_PRODUCTS_BEGIN,
  UPDATE_OFFSET,
  FILTER_PRICE
} from "../actions/productActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  category: "",
  id: 1,
  item: [],
  basketCount: 0,
  basket: [],
  offset: 0
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
    case ADD_BASKET_COUNT:
      return {
        ...state,
        basketCount: state.basketCount + 1
      };
    case ADD_ITEM_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, state.item]
      };
    case REMOVE_ITEM_FROM_BASKET:
      let newBasket = [
        ...state.basket.filter(item => {
          // [1,2,3,5]
          return item.id !== action.id;
        })
      ];
      return {
        ...state,
        basket: newBasket
      };
    case FETCH_MORE_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: false,
        error: null
      };
    case FETCH_MORE_PRODUCTS_SUCCESS:
      //add to products.items
      let upcommingItems = action.payload.products;
      let newItems = [...state.items];
      upcommingItems.forEach(product => newItems.push(product));
      return {
        ...state,
        items: newItems,
        loading: false
      };
    case UPDATE_OFFSET:
      return {
        ...state,
        offset: state.offset + action.offset
      };
    case FILTER_PRICE:
      let rangeToFilter = action.rangeToFilter;
      let filteredItems = [
        ...state.items.filter(item => {
          return (
            item.price.current.value >= rangeToFilter[0] &&
            item.price.current.value <= rangeToFilter[1]
          );
        })
      ];
      return {
        ...state,
        items: filteredItems
      };
    default:
      return state;
  }
}
