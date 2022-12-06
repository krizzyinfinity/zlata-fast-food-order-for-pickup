import React, { useRef } from "react";
import Link from "next/link";
import axios from "axios"
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-hot-toast";
import getStripe from "../lib/getStripe";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

import { Box, Button, Typography } from "@mui/material";
import { BsBox } from "react-icons/bs";
const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartQuantity,
    onRemove,
    setShowCart,
   
  } = useStateContext();

  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });


    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };


  return (
    <Box className="cart-wrapper"
      ref={cartRef}
      
    >
      <Box className="cart-container"
        
      >
        <Button onClick={() => setShowCart((prevState) => !prevState)}>
          <AiOutlineLeft style={{color:"#e32431"}}/>
          <span style={{color:"#e32431"}}>Your cart</span>
          <span style={{color:"#e32431"}}>({totalQuantities} items )</span>
        </Button>
        {cartItems.length < 1 && (
          <Box>
            <AiOutlineShopping size={150} />
            <Typography variant="h6">Your shopping cart is empty</Typography>

            <Link style={{textDecoration:"none"}} href="/">
              <Button sx={{color:"#e32431"}}  onClick={() => setShowCart((prevState) => !prevState)}>
                Continue shopping
              </Button>
            </Link>
          </Box>
        )}
        <Box>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <Box
                key={item._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{
                    height: 100,
                    width: 120,
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                  src={urlFor(item.image[0])}
                ></img>

                <Box sx={{ mt: 2 }}>
                  <Typography sx={{fontSize:"140%"}} variant="h6">{item.name}</Typography>

                  <button
                    style={{ width: "24%" }}
                    onClick={() => toggleCartQuantity(item._id, "dec")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span style={{ marginLeft: 10, marginRight: 10, fontSize:"140%" }}>
                    {item.quantity}
                  </span>
                  
                  <button
                    style={{ width: "24%" }}
                    onClick={() => toggleCartQuantity(item._id, "inc")}
                  >
                    <AiOutlinePlus />
                  </button>
                  {/* <span >
                    {extra.map((x)=> {
                      return x
                    })}
                    {console.log(extra)}
                  </span> */}
                </Box>
                <Box sx={{ mt: 4}}>
                  <Typography sx={{ mr: 10, ml: 0, fontSize:"170%" }} variant="h6">
                  € {item.price}
                  </Typography>
                  <Button onClick={() => onRemove(item)} sx={{ color: "#e32431" }}>
                    <TiDelete style={{ fontSize: 30 }} />
                  </Button>
                </Box>
              </Box>
            ))}
        </Box>
        {cartItems.length >= 1 && (
          <Box
            sx={{
              position: "absolute",
              bottom: "12px",
              right: "5px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                ml: 5,
                mr: 15,
              }}
            >
              <Typography sx={{fontSize:"140%"}} variant="h6">Total: </Typography>
              <Typography sx={{fontSize:"140%"}} variant="h6"> € {totalPrice}</Typography>
            </Box>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                onClick={handleCheckout}
                sx={{
                  backgroundColor: "#e32431",
                  color: "white",
                  fontSize:"140%",
                  p: 1,
                  width: 400,
                }}
              >
                Pay for order
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
