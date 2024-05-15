import { useDispatch, useSelector } from "react-redux";


import { useState } from "react";
import { remove } from "../feature/Card/CardSlice";

const Product = () => {
 
  const {cardsItem,price,cartTotalAmount}=useSelector(state=>state.cards)
const total = cardsItem.reduce((p, c) => p + c.price*c.qty, 0);
  
console.log(cartTotalAmount*total)
const grandAmount=total*price
const sum =grandAmount+cartTotalAmount
 return(
  <div class=" max-w-xl ml-auto mt-4">
  <ul class="text-gray-800 divide-y">
    <li class="flex flex-wrap gap-4 text-base py-3">Subtotal <span class="ml-auto font-bold">{grandAmount}₹</span></li>
    <li class="flex flex-wrap gap-4 text-base py-3">Shipping <span class="ml-auto font-bold">{cartTotalAmount}₹</span></li>
    <li class="flex flex-wrap gap-4 text-base py-3">Tax <span class="ml-auto font-bold">4.00₹</span></li>
    <li class="flex flex-wrap gap-4 text-base py-3 font-bold">Total <span class="ml-auto">{sum}₹</span></li>
  </ul>
  <button type="button" class="mt-6 text-base px-6 py-2 w-full bg-gray-800 hover:bg-gray-900 text-white rounded">Check
    out</button>
</div>
  );
};
export default Product;