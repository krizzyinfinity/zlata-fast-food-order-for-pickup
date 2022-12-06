import { Box, Typography } from '@mui/material'
import React from 'react'
import {BsFacebook} from "react-icons/bs"
function Footer() {
  return (
    <Box sx={{display:"flex",width:{xs:650, sm:900, md:1000, xl:1600},
    flexDirection:"column",alignItems:"center",
    justifyContent:"center", pt:5, mt:15}}>
      <Typography sx={{fontSize:"150%"}}>Copyright 2023</Typography>
      <a href="https://www.facebook.com/groups/426521877942806">
      <BsFacebook style={{marginTop:10, fontSize:"250%"}} />
      </a>
    </Box>
  )
}

export default Footer