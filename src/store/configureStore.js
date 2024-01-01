import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancerDevelopmentOnly } from "@redux-devtools/extension";

export function configureStore() {
  return createStore(rootReducer, devToolsEnhancerDevelopmentOnly());
}
