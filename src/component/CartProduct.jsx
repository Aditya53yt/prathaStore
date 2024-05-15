import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { devData, pricedata, remove } from '../feature/Card/CardSlice';
import { useEffect } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';

const CartProduct = ({card}) => {
    const[count,setCount]=useState(1)
    const [devPrice,setDevPrice]=useState(0)
    const dispatch = useDispatch()
    const incrementQty = () => {
        setCount(count + 1);
      };
      const decrementQty = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };
      const handleRemove =(id)=> {
        dispatch(remove(id));
      };
      const handleChange = (e) => {
        setDevPrice(e.target.value);
      };
      

      useEffect(()=>{

        dispatch(pricedata(count))
      dispatch(devData(devPrice))
      
      },[count,devPrice])
  return (
    <div>
    <tr>
    <td class="py-6 px-4">
      <div class="flex items-center gap-4 w-max">
        <div class="h-36 shrink-0">
          <img src={card.img} class="w-full h-full object-contain" />
        </div>
        <div>
          <p class="text-lg font-bold text-gray-800">{card.name}</p>
        </div>
      </div>
    </td>

    <td class="py-6 px-4">
      <button type="button" class="bg-transparent border flex items-center justify-center w-11 h-10 font-semibold text-base">
        M
      </button>
    </td>

    <td class="py-6 px-4">
      <div class="flex overflow-hidden border w-max">
        <button type="button" class="bg-gray-100 flex items-center justify-center w-11 h-10 font-semibold" onClick={decrementQty}>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 124 124">
            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
          </svg>
        </button>
        <button type="button" class="bg-transparent flex items-center justify-center w-11 h-10 font-semibold text-gray-800 text-base">
     {count}
        </button>
        <button type="button" class="bg-gray-800 text-white flex items-center justify-center w-11 h-10 font-semibold" onClick={incrementQty}>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-current" viewBox="0 0 42 42">
            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
          </svg>
        </button>
      </div>
    </td>

    <td class="py-6 px-4">
      <button type="button" class="bg-transparent border flex items-center justify-center w-11 h-10 font-semibold" onClick={() => handleRemove(card.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
          <path
            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
            data-original="#000000"></path>
          <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
            data-original="#000000"></path>
        </svg>
      </button>
    </td>
    <td class="py-6 px-4">
      <h4 class="text-lg font-bold text-gray-800">{count*card.price}₹</h4>
    </td>
   <td style={{display:"flex"} }>
   
        </td>
        
  </tr>
<div >
<InputLabel id="demo-simple-select-label">extra charges</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={devPrice}
    label="extra charge"
    onChange={handleChange}
    fullWidth
  >
   
    <MenuItem value={0}>5Km/free</MenuItem>
    <MenuItem value={74}>15KM(74₹)</MenuItem>
    <MenuItem value={100}>20KM(100₹)</MenuItem>
  </Select>
</div>

</div>
  )
}

export default CartProduct