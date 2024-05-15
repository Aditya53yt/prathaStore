import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const SideCard = ({item}) => {
   




  const {cardsItem,price,cartTotalAmount}=useSelector(state=>state.cards)
const total = cardsItem.reduce((p, c) => p + c.price*c.qty, 0);
  
console.log(cartTotalAmount*total)
const grandAmount=total*price





return (
    <Container sx={{marginTop:"200px"}}>
<Typography variant='h3'>Total summary</Typography>
    <Card sx={{ minWidth: 275 }}>
    <CardContent >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    item:{cardsItem.length}
      </Typography> 
      <Typography variant="h5" component="div">
     {cardsItem[0]?.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
     price:{grandAmount}₹
      </Typography>
      <Typography variant="body2">
        Total Price:{ cardsItem.length>0 ? cartTotalAmount+grandAmount:0}₹
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </Container>
  )
}

export default SideCard