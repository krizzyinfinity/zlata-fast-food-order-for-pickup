import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { client, urlFor } from '../../lib/client'
import  { useStateContext} from "../../context/StateContext"
const ProductDetails = ({food, food2}) => {
    const {image, name, description, price} = food;
    
    const{decQty, incQty, qty, onAdd, setShowCart} = useStateContext();
    const handleOrderNow = ()=> {
      onAdd(food, qty);
      setShowCart(true);
    }
  return (
    <Box sx={{mt:4,height:"100vh", display:"flex", alignItems:"top",
    justifyContent:"space-between",flexWrap:"wrap",
    ml:{xs:15, sm:20, md:10, xl:20}}}>
    
       
            <Box >
                  <img className="myImg3" style={{borderRadius:10,
                }} src={urlFor(image && image[0])}></img>  
           
       
       
            <Typography sx={{mt:3}} variant="h3">{name}</Typography>
            <Typography sx={{
              fontSize:"170%", maxWidth:500,
            }} variant="h5">{description}</Typography>
            <span style={{fontWeight:"bold", fontSize:"150%"}}> euros{price}</span>
            </Box>
            <Box sx={{ mr:{xl:30, md:8
            }}}>
            <Typography sx={{fontWeight:"bold", mr:2}} variant="h6">Quantity:</Typography>
           
           
           <button style={{width:"14%"}} onClick={decQty}>
           <AiOutlineMinus />
           </button>
           <span style={{marginLeft:10, marginRight:10}}>{qty}</span>
           <button style={{width:"14%", marginTop:30}}  onClick={incQty}>
            <AiOutlinePlus />
          </button>
           <br/>
          
           {/* { extras &&  <><p style={{ fontWeight:"bold",
           fontSize:"120%",marginTop:30, marginBottom:10}}>Choose what to put inside:</p>
           <span style={{display:"flex", flexWrap:"wrap"}} > {extras.map((x)=> {
            return  <div key={x.name}
           >
           
          <input 
           onChange={(e)=>handleChange(e, x)} type="checkbox" name={x} id={x} 
         />
      
            <label style={{marginRight:30, fontSize:"110%"}}> {x} </label>
           </div>
           
           })}</span>
           </> 
}        */}
 <Box sx={{display:"flex", flexWrap:"no-wrap",justifyContent:"space-between", alignItems:"center"}}>
           <Button onClick={()=> onAdd(food, qty)} sx={{backgroundColor:"#e32431",
           ':hover': {
            bgcolor: 'white',
            border: "#e32431 solid 2px",
            fontWeight:"bold", 
            color: 'black',
          },
           fontSize:"100%",width:{xl:200, md:150, xs:160}, color:"white", p:2,mt:5}}>ADD TO CART</Button>
          
           <Button onClick={handleOrderNow} sx={{border:"#e32431 solid 2px",
           fontSize:"100%",width:{xl:200, md:150, xs:160}, color:"black", fontWeight:"bold", p:1.7, mt:5,
           ml:{xs:5, sm:10, xl:3}}}>ORDER NOW</Button>
         </Box>
        </Box>
    
    </Box>
  )
}
export const getStaticPaths = async ()=> {
    const query = `*[_type == "food"] {
        slug {
            current
        }
    }`;
    const food = await client.fetch(query);
    const paths = food.map((item) => ({
        params: {
            slug:item.slug.current
        }
    }));
    return {
        paths,
        fallback:"blocking"
    }
}
export  const getStaticProps = async({params:{slug}})=> {
    const query = `*[_type == "food" && slug.
current == '${slug}'][0]`;
    const food = await client.fetch(query);
//     const food2Querry = `*[_type == "food]`
//   const food2 = await client.fetch(food2Querry);
    return {
      props: {
        food
      }
    }
  }

export default ProductDetails