import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box,Typography,useMediaQuery } from '@mui/material'
import Sidebar from 'components/Sidebar'
import NavBar from 'components/NavBar'

const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen,setIsSidebarOpen] = useState(true)
  return (
    <Box
    display={isNonMobile ? "flex" : "block"} width="100%" height="100%"
    >
        <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box
        width="100%"
        flexGrow={1}
        >
          <NavBar
          />
          <Outlet />
        </Box>
          
    </Box>
  )
}

export default Layout