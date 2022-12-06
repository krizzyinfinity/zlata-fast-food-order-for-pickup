import React from 'react'
import Link from 'next/link'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Box, Button, Typography } from '@mui/material'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'
const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  
  return (
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between",
    ml:{md:15, xs:5}, mr:{md:5,sm:15, xs:5,}, mt:5, width:{xs:600,
      sm:800, md:800, xl:1300},position:"relative"}}>
     
      <Typography variant="h4" sx={{ml:3, fontSize: {
        xs:30, 
      }}}>
      <Link style={{textDecoration:"none", color:"grey"}} href="/">Fast Food Zlata
      </Link></Typography>
      <Button sx={{mr:3}} onClick={()=> setShowCart((prevState)=> !prevState)}>
        <AiOutlineShoppingCart style={{color:"grey", fontSize:30, marginRight:20, position:"relative"}} />
        <span style={{position:"absolute", bottom:22, color:"black",backgroundColor:"#e32431",
        borderRadius:"50%",width:20, fontSize:12}}>{totalQuantities}</span>
      </Button>
     { showCart && 
     <Cart />}
    </Box>
  )
}

export default Navbar