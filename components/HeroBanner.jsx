import Link from 'next/link'
import React from 'react'
import {Box, Typography, Button} from "@mui/material"
import { urlFor } from '../lib/client'
const HeroBanner = ({heroBanner}) => {
  return (
    <Box sx={{backgroundColor:" #dcdcdc", borderRadius:10,
    display:"flex", justifyContent:"space-between",alignItems:"center",
     width:"100%", mt:0,ml:-2, height:"450px", position:"relative"}}>
      <Box sx={{ml:10, }}>
        <Typography sx={{ mb:3, fontSize:"170%"}} variant="h4">{heroBanner.smallText}</Typography>
        <Typography sx={{color:"white",
      mb:{xs:15, xl:5}}} variant="h1">{heroBanner.midText}</Typography>
        <img className='myImg product-card-img' src={urlFor(heroBanner.image)} alt="food" ></img>
       
        <Link style={{textDecoration:"none"}}   href="/food/fried-calamari" >
            <Button variant="contained" sx={{mt:5, backgroundColor:"#e32431",
             color:"white", p:2, fontSize:"100%"}} type="button">ORDER FOR PICKUP</Button>
        </Link>
        </Box>
        <Box sx={{mt:35, pr:10}}>
            <Typography variant="h6" 
            sx={{fontSize:"120%", mt:5}}>{heroBanner.desc}</Typography>
            
         
       
        </Box>  
    </Box>
  )
}

export default HeroBanner