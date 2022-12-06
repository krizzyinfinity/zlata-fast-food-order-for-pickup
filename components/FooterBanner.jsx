import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
const FooterBanner = ({footerBanner}) => {
  return (
    <Box sx={{color:"white", borderRadius:10, p: 5,mt: 5,height:300, position:"relative",
    display:"flex", alignItems:"center",justifyContent:"space-between", width:"100%", backgroundColor:"#e32431"}}>
<Box>
<Typography sx={{fontSize:"210%"}}  variant="h3">{footerBanner.largeText1}</Typography>

<Typography sx={{mt:2, fontSize:"210%"}} variant="h4">{footerBanner.largeText2}</Typography>

<Typography sx={{mt:2, fontSize:"210%"}} variant="h4">{footerBanner.largeText4}</Typography>
</Box>
<Box>

<Typography sx={{fontSize:"210%"}} variant="h4">{footerBanner.largeText3}</Typography>
</Box>
<img className='product-card-img myImg2'  src={urlFor(footerBanner.image)}></img>
    </Box>
  )
}

export default FooterBanner