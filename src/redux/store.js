//import { createStore } from "redux";
//import { legacy_createStore as createStore} from 'redux'
//import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
//import { tasksReducer, filtersReducer  } from "./reducer";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
/*const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);*/
