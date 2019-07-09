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
  SORT_ITEMS_BY_PRICE_ASCENDING,
  SORT_ITEMS_BY_PRICE_DESCENDING
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
      console.log("product begins", state.offset);
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      console.log("product suuccess", state.offset);
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
        category: action.category,
        offset: 0
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
        loading: true,
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
    case SORT_ITEMS_BY_PRICE_ASCENDING:
      let sortedItemsAscending = [
        ...state.items.sort(
          (a, b) => a.price.current.value - b.price.current.value
        )
      ];
      return {
        ...state,
        items: sortedItemsAscending
      };
    case SORT_ITEMS_BY_PRICE_DESCENDING:
      let sortedItemsDescending = [
        ...state.items.sort(
          (a, b) => b.price.current.value - a.price.current.value
        )
      ];
      return {
        ...state,
        items: sortedItemsDescending
      };
    default:
      return state;
  }
}
