import React from 'react'
import { AppBar,Box,Typography, Button, IconButton, InputBase, Toolbar, useTheme, Menu, MenuItem } from '@mui/material';

const NavBar = () => {
    const theme = useTheme()
  return (
    <AppBar component="nav"  sx={{
        position: "sticky",
        background: theme.palette.background.default,
        boxShadow: "none",
        zIndex:"999"
    }}>
        <Box
        width="100%"
        p="1.2rem 1.2rem"
        sx={{ borderBottom: 1 }}
        >
        <Typography variant='h2' color="black">Demande a traiter</Typography>
    </Box>
        
    </AppBar>
  )
}

export default NavBar