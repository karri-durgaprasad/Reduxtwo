import { createSlice } from "@reduxjs/toolkit";
const UpdateData = JSON.parse(localStorage.getItem("updateData"));
const PizzaSlice = createSlice({
      name:"PizzaSetup",
      initialState:{
          Pizza:UpdateData?.Pizza || [],
          Count:UpdateData?.Count || 0,
          Total:UpdateData?.Total || 0
   
      },
      reducers:{
          increment:(state,action)=>{
                
                const {name, quantity} = action.payload;
                const newPizza ={
                      name:name,
                      quantity:quantity
                }
                state.Pizza.push(newPizza);
                state.quantity = quantity;
                state.Count += quantity;
                state.Total = 10 * state.Count;
          },
         resetdata:(state)=>{
                 state.Pizza =[];
                 state.Count = 0;
                 state.Total = 0;
         }
      }
});
export const {increment,resetdata} = PizzaSlice.actions;
export default PizzaSlice.reducer;