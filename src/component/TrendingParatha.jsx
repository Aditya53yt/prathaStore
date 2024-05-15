import React, { useEffect, useState } from 'react'
import ParathaCard from './ParathaCard'
import { Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getFood } from '../feature/Paratha/parathaSlice'



const TrendingParatha = () => {
  const [trending, setTrending] = useState([])
  const dispatch = useDispatch()
  const { allFood } = useSelector(state => state.paratha)

  const fetchFood = async () => {
    const response = await fetch(`https://paratha-store.onrender.com/data`)
    const data = await response.json()
    setTrending(data)

  }

  // const dispatch=useDispatch()
  // useEffect(()=>{

  // setTrending(allFood)
  // },[])
  //  console.log(allFood)

  //  console.log(trending)
  useEffect(() => {
    fetchFood()
  }, [])

  return (
    <>
      <Typography sx={{ textAlign: "center", fontSize: "50px", fontFamily: "monospace", padding: "20px" }}>Trending Paratha</Typography>

      <Grid container spacing={2}>
        {
          trending.map((paratha) => <ParathaCard key={paratha.id} paratha={paratha} />)
        }
      </Grid>
    </>
  )
}

export default TrendingParatha