import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFood } from "../ParathaServies";



const parathaSlice=createSlice({

   name: 'paratha',
   initialState:{
      allFood: [],
      isLoading: false,
      isSuccess: false,
      isError: false,
     
   },

   reducers:{},
   // extraReducers:(builder)=>{
   //    builder.addCase(getFood.pending,(state,action)=>{
   //       state.isLoading=true
   //       state.isSuccess=false
   //       state.isError=false
   //   })
   //   .addCase(getFood.fulfilled,(state,action)=>{
   //       state.isLoading=false
   //       state.isSuccess=true
   //       state.isError=false
   //       state.allFood=action.payload
   //   })
   //   .addCase(getFood.rejected,(state,action)=>{
   //       state.isLoading=false
   //       state.isSuccess=false
   //       state.isError=true
   //       })
   //  }
})
export default parathaSlice.reducer

 export const getFood=createAsyncThunk('FETCH/PARATHA',async()=>{
// try {
//    return await fetchFood()
// } catch (error) {
//    console.log(error)
// }
 })