import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart"


const CartItem = () => {
 
  return(
   <Cart/>
  );
};

export default CartItem;