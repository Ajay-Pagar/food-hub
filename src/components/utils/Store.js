import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const cartStore = configureStore({
  reducer: {
    cart: cartSlice, // name of the slice : cart & the slice : cartSlice
  },
});

export default cartStore;

/*
Create Store
 - configureStore() - Redux toolkit (RTK)

 Provider my store to app
  -<Provider store={store}/> import from react-redux

  slice
   -RTk - createSlice({
    name:"",
    initialState,
    reducers:{
        addItem:(state,action)=>{state = action.payload }
    }
   });

   export const{addItem} = cartSlice.actions;
   export default cartSlice.reducer;

put that slice into store

-{reducer : {
    cart: cartSlice
}}
*/
