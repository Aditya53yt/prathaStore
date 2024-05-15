import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "cards",
  initialState: {
    cardsItem: [],
    price:[],
    cartTotalQty : 0,
    cartTotalAmount : 0,
  },

  reducers: {
    add: (state, action) => {



    //   const itemIndex = state.cardsItem.findIndex(

    //     (item) => item.id === action.payload.id
    //   )
    //   if(itemIndex >= 0){
    //     state.cardsItem[itemIndex].cartTotalQty += 1;
    //   }else {
    //     const tempProduct = {...action.payload, cartTotalQty: 1}
    //     state.cardsItem.push(tempProduct)
    //   }

      return {
        ...state,
        cardsItem: [action.payload, ...state.cardsItem],
      };

    //   console.log(action.payload)
    },

    remove: (state, action) => {
      return {
        ...state,
        cardsItem: state.cardsItem.filter((item) => item.id !== action.payload),
      };
    },

    // increment to cart
    incrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },

    // decrement to cart
    decrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },

    // qty to cart
    qtyprice: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty * item.price }
          : item
      );
    },
  },
  extraReducers:((builder)=>{
 builder.addCase(pricedata.fulfilled,(state,action)=>{
  state.price=action.payload
 }).addCase(devData.fulfilled,(state,action)=>{
  state.cartTotalAmount=action.payload
 })
  })
});

export const pricedata = createAsyncThunk("Fetch/price", async (responce) => {
return responce
});
export const devData = createAsyncThunk("Fetch/delivery", async (responce) => {
  return responce
  });
export const { add, remove, incrementQty, decrementQty, qtyprice,handleprice } = CardSlice.actions;
export default CardSlice.reducer;




