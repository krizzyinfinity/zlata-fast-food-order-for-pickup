import React from 'react'
import {Food, FooterBanner, HeroBanner} from "../components"
import styles from "../styles/Home.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography"

import { client } from '../lib/client';
import { urlFor } from '../lib/client'

const Home = ({food, banner}) => {
  return (
    <Box className={styles.container} sx={{width:{xs:700,
    sm:900, md:"90vw"}}}>
      <HeroBanner  heroBanner = {banner.length && banner[0]} />
     {console.log(banner)}
      <Box sx={{textAlign:"center",mt:5}}>
        <Typography variant="h2" >Menu</Typography>
        <Typography variant="h3">Very versatille and full of flavours</Typography>
      </Box>
      <div>
        
        {console.log(food)}
         <Box   sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        '& > :not(style)': {
          m: {lg:8, md:8, xs:3, sm:3},
          
        },
      }}>
        
       
        {
           
        food?.map((item)=> {
          
           return <Food menu={item}/>
       
          
        })
       
}

     </Box>     
       </div>  
<FooterBanner footerBanner = {banner && banner[0]}/>
     
      
    </Box>
  )
}



export  const getServerSideProps = async()=> {
  const query = `*[_type == "food"]`;
  const food = await client.fetch(query);
  const bannerQuery = `*[_type == "banner"]`
  const banner = await client.fetch(bannerQuery);

  return {
    props: {
      food, banner
    }
  };
}
export default Home