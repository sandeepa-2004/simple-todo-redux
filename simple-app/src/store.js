import {configureStore} from "@reduxjs/toolkit";
import taskreducer from "./utilities/state/taskeslice.js";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig,taskreducer )

 export  const store = configureStore({
    reducer:{
        statestore:persistedReducer

    }
})
export const persistor = persistStore(store)