import React from 'react'
import CartProduct from './CartProduct'
import CartItem from './parathaDetails'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {cardsItem}=useSelector((state)=> state.cards)
   
  return (
    <div class="font-sans bg-white max-w-6xl mx-auto p-4">
    <h2 class="text-3xl font-extrabold text-gray-800">Your Cart</h2>
    <div class="overflow-x-auto">
  <table class="mt-12 w-full border-collapse divide-y">

    <thead class="whitespace-nowrap text-left">
      <tr>
        <th class="text-base text-gray-500 p-2">Description</th>
        <th class="text-base text-gray-500 p-2">Size</th>
        <th class="text-base text-gray-500 p-2">Quantity</th>
        <th class="text-base text-gray-500 p-2">Remove</th>
        <th class="text-base text-gray-500 p-2">Price</th>
      </tr>
    </thead>

    <tbody class="whitespace-nowrap divide-y">
     
{

    cardsItem.map((card)=><CartProduct key={card.id} card={card}/>)
}
    </tbody>
  </table>
</div>
  </div>
  )
}

export default Cart