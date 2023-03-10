import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducers from "../reducers/index";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

export default store;
