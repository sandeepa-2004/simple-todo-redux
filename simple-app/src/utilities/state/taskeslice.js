import {createSlice, nanoid} from "@reduxjs/toolkit";

 const taskeslice= createSlice({
    name:"tasks",
     initialState:{
        tasks:[]
     },
     reducers:{
        storeTask:(state,action)=>{
            const dotask = {id:nanoid(),task:action.payload}
            state.tasks.push(dotask)},
         removeTask:(state,action)=>{
            const removetaskid = action.payload
             state.tasks = state.tasks.filter(
                 task=> task.id !== removetaskid
             )

         }
     }
})
export const {storeTask,removeTask}=taskeslice.actions
export default taskeslice.reducer
