import React, { useEffect } from 'react'
import Navbar from './component/Navbar'

import { Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getFood } from './feature/Paratha/parathaSlice'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import CartItem from './component/parathaDetails'
import MainCart from './component/MainCart'
import Register from './component/Register'
import Login from './component/Login'




const App = () => {
  
const dispatch =useDispatch()
useEffect(()=>{
  dispatch(getFood())
},[])


  return (
   <Router>
    <Navbar/>
  
    <Routes>
      
      <Route path='/' element={<Home/>}></Route>
 
      <Route path='/mainCart' element={<MainCart/>}></Route>
     
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
  
    </Routes>
         
</Router>
   
  )
}

export default App