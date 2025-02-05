import {createSlice} from "@reduxjs/toolkit";

 const taskeslice= createSlice({
    name:"tasks",
     initialState:{
        tasks:[]
     },
     reducers:{
        storeTask:(state,action)=>{state.tasks.push(action.payload)},
         removeTask:()=>{}
     }
})
export const {storeTask,removeTask}=taskeslice.actions
export default taskeslice.reducer
