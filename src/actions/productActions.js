import axios from "axios";
export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_SINGLE_PRODUCT_SUCCESS = "FETCH_SINGLE_PRODUCT_SUCCESS";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const CARD_SELECT_BY_ID = "CARD_SELECT_BY_ID";
export const FETCH_READY = "FETCH_READY";
export const ADD_BASKET_COUNT = "ADD_BASKET_COUNT";
export const ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET";
export const REMOVE_ITEM_FROM_BASKET = "REMOVE_ITEM_FROM_BASKET";
export const FETCH_MORE_PRODUCTS_SUCCESS = "FETCH_MORE_PRODUCTS_SUCCESS";
export const FETCH_MORE_PRODUCTS_BEGIN = "FETCH_MORE_PRODUCTS_BEGIN";
export const UPDATE_OFFSET = "UPDATE_OFFSET";

const config = {
  headers: {
    "X-RapidAPI-Key": "07ea04e210mshdcdcdfaeb0a8a2fp1b7079jsnb16592877577"
  }
};

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
});

export const cardSelectByID = id => ({
  type: CARD_SELECT_BY_ID,
  id
});

export const fetchReady = () => ({
  type: FETCH_READY
});

export const fetchSingleProductSuccess = item => ({
  type: FETCH_SINGLE_PRODUCT_SUCCESS,
  payload: { item }
});

export const fetchMoreProductsBegin = () => ({
  type: FETCH_MORE_PRODUCTS_BEGIN
});

export function fetchProductByID(id) {
  return dispatch => {
    dispatch(fetchMoreProductsBegin());
    return axios
      .get(
        `https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/catalogue/v2/products/${id}?lang=en-GB&productid=${id}&store=COM&sizeschema=EU&currency=EUR`,
        config
      )
      .then(res => {
        dispatch(fetchSingleProductSuccess(res.data));
        return res.data;
      })
      .then(() => dispatch(fetchReady()))
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export function fetchProducts(category) {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return axios
      .get(
        `https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=${category}&lang=en-GB&currency=EUR&store=1&limit=40`,
        config
      )
      .then(res => {
        dispatch(fetchProductsSuccess(res.data.products));
        return res.data.products;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export const addBasketCount = () => ({
  type: ADD_BASKET_COUNT
});

export const addItemToBasket = () => ({
  type: ADD_ITEM_TO_BASKET
});

export const removeItemFromBasket = id => ({
  type: REMOVE_ITEM_FROM_BASKET,
  id
});

export function fetchMoreProducts(category, offset) {
  return dispatch => {
    dispatch(fetchMoreProductsBegin());
    return axios
      .get(
        `https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=${category}&lang=en-GB&currency=EUR&store=1&limit=40&offset=${offset}`,
        config
      )
      .then(res => {
        dispatch(fetchMoreProductsSuccess(res.data.products));
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

export const fetchMoreProductsSuccess = products => ({
  type: FETCH_MORE_PRODUCTS_SUCCESS,
  payload: { products }
});

export const updateOffset = offset => ({
  type: UPDATE_OFFSET,
  offset
});
