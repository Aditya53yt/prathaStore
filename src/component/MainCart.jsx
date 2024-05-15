import React from 'react'
import CardItem from './parathaDetails'
import SideCard from './SideCard'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import Product from './Product'

const MainCart = () => {
    


  return (
    
    <Grid container spacing={2}>
    <Grid item xs={8} md={8} >
{
 <CardItem/>
}
{/* 
//     </Grid>
//      <Grid item xs={4} md={4}>
//       {/* <Item>xs=6 md=4</Item> */}
<Product/>
     </Grid> 
    </Grid>



  )
}

export default MainCart