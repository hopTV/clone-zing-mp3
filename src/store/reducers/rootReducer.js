import appReducer from "../reducers/appReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
