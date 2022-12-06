import React from 'react'
import Card from "@mui/material/Card"          
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography"
import { urlFor } from '../lib/client'
import Link from 'next/link';
const Food = ({menu}) => {
  return (
    <Box>
     <Link style={{textDecoration:"none"}}  href={`/food/${menu.slug.current}`} >
     
            <Card className='product-card' sx={{ width: {xl:280, xs:350, sm:350, md:300},
            height:{xl:500, md:490, sm:490, xs:470}, borderRadius:10 }}>
            <CardMedia
          component="img"
          height={250}
          image={urlFor(menu.image && menu.image[0])}
          alt="menu item"
        />
        <CardContent>
          <Typography sx={{fontSize:"180%"}} gutterBottom variant="h5" component="div">
            {menu.name}
          </Typography>
          <Typography  sx={{fontSize:"120%"}} variant="body2" color="text.secondary">
            {menu.description}
          </Typography>
          <Typography  sx={{fontSize:"120%"}} variant="body2" color="text.secondary">
            {menu.slug.current}
          </Typography>
          <Typography  sx={{fontSize:"180%"}} variant="body2" color="text.secondary">
            {menu.price} €
          </Typography>
        </CardContent>
            </Card>
            </Link>
             </Box>
  )
}

export default Food