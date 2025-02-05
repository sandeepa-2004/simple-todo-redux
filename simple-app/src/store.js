import {configureStore} from "@reduxjs/toolkit";
import taskreducer from "./utilities/state/taskeslice.js";
 export default configureStore({
    reducer:{
        state:taskreducer

    }
})