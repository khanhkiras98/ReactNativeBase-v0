import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth"
// import product from "./product"
import invoice from './invoice'

const rootReducer = combineReducers({
  auth,
  // product,
  invoice,
});

export default rootReducer;