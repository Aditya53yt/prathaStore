import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import logo1 from "../assets/image1.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../feature/Card/CardSlice'

const ParathaCard = ({paratha}) => {
  const{cardsItem}=useSelector(state=>state.cards)

  const dispatch =useDispatch()
 const addToCard=()=>{
dispatch(add(paratha))
 }
 console.log(paratha)

  return (
    <Grid item xs={12} md={6} lg={4} > 
    <div class="menu-item">
    <img src={paratha.img}
        alt="" />

    <div class="title">{paratha.name}</div>

    <div class="location">{paratha.description}</div>

    <div class="order flex">
        <div class="price">$
        {paratha.price}</div>
     <button className='btn' onClick={()=>addToCard(paratha)}>order Now</button>  
    </div>
</div>
</Grid>
  )
}

export default ParathaCard