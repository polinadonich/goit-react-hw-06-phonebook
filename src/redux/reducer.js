import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (state, { payload }) => payload,
});

const initialState = combineReducers({
  items,
  filter,
});

export default initialState;
