import React from 'react'
import { AppBar,Box,Typography, Button, IconButton, InputBase, Toolbar, useTheme, Menu, MenuItem } from '@mui/material';

const NavBar = () => {
    const theme = useTheme()
  return (
    <AppBar component="nav"  sx={{
        position: "sticky",
        background: theme.palette.background.nav,
        boxShadow: "none",
        zIndex:"999"
    }}>
        <Box
        width="100%"
        p="1.4rem 1.4rem"
        sx={{ borderBottom: 1 }}
        >
        <Typography variant='h2' color="white">Demande a traiter</Typography>
    </Box>
        
    </AppBar>
  )
}

export default NavBar