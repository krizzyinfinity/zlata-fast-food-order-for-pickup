import React from 'react'
import Head from "next/head"
import { Box, Typography } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <Box sx={{p:10}}>
      <Head>
        <title>Fast Food Zlata</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
     {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  )
}

export default Layout