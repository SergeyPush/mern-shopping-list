import axios from "axios";
import {
  ADD_ITEM,
  GET_ITEMS,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then(res => dispatch({ type: GET_ITEMS, payload: res.data }))
    .catch(err => console.log(err));
};

export const deleteItem = id => dispatch => {
  dispatch(setItemsLoading());
  axios.delete(`/api/items/${id}`).then(res => {
    dispatch({ type: DELETE_ITEM, payload: id });
  });
};

export const addItem = item => dispatch => {
  dispatch(setItemsLoading());
  axios.post("/api/items", { name: item.name }).then(res => {
    dispatch({ type: ADD_ITEM, payload: res.data });
  });
};

export const setItemsLoading = () => ({
  type: ITEMS_LOADING
});
