import React, { useEffect, useState } from 'react'
import logo from "assets/wathaequi.png"
import profileImage from "assets/profil.jpg"
import {Box, Divider, Drawer,List,ListItem,ListItemButton,Typography,ListItemText,ListItemIcon,useTheme, IconButton} from '@mui/material'
import { SettingsOutlined,ChevronLeft,ChevronRightOutlined,HomeOutlined,ShoppingCartOutlined,Groups2Outlined,ReceiptLongOutlined,PublicOutlined,PointOfSaleOutlined,TodayOutlined,CalendarMonthOutlined,AdminPanelSettingsOutlined,TrendingUpOutlined,PieChartOutlined,Person,Work,Forum,Settings} from '@mui/icons-material'
import { useLocation,useNavigate} from 'react-router-dom'
import FlexBetween from './FlexBetween'

const navItemes = [
    {
        text: "Citizen Management",
        icon: <Person/>
    },
    {
        text: "Agent Management",
        icon: <Work/>
    },
    {
        text: "Forum",
        icon: <Forum/>
    }
]

const secondNav = [
    {
        text:"Settings",
        icon: <Settings/>
    }
]


const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
}) => {
    const {pathname} = useLocation();
    const [active,setActive] = useState("")
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() =>{
        setActive(pathname.substring(1))
    })


  return <Box component="nav">
    {isSidebarOpen && (
        <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="persistent"
        anchor='left'
        sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.background.alt,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth
            }
        }}
        >
            <Box width="100%">
                <Box color={theme.palette.secondary.main} m="1.5rem 2.rem 2rem 3rem">
                        <Box display="flex" justifyContent="center" alignItems="center" marginTop="1.5rem" gap="0.5rem">
                            <Box
                            component="img"
                            alt="logo"
                            src={logo}
                            height="80px"
                            width="80px"
                            />
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft/>
                                </IconButton>
                            )}
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" m="1.5rem 0rem" >
                            <Box
                            component="img"
                            alt="profile"
                            src={profileImage}
                            height="80px"
                            width="80px"
                            borderRadius="50%"
                            sx={{objectFit:"cover"}}
                            />
                            <Box
                            bgcolor="#D3E2E7"
                            p="0.6rem 1.5rem"
                            m="1.3rem 0rem"
                            >
                                <Typography fontWeight="bold" fontSize="0.9rem" sx={{color:"black"}} >
                                    Administrator
                                </Typography>
                            </Box>
                        </Box>
                        <List sx={{
                            '& .MuiListItemButton-root:hover': {
                                backgroundColor: '#F8F8F8',
                                '&, & .MuiListItemIcon-root': {
                                  color: theme.palette.secondary.selec,
                                },
                              },
                        }}>
                            {
                                navItemes.map(({text,icon}) =>{
                                    if (!icon) {
                                        return (
                                            <Typography key={text} sx={{ m:"2.25rem 0 1rem 3rem"}}>
                                                {text}
                                            </Typography>
                                        )
                                    }
                                    const lcText = text.toLowerCase().replace(/ /g, '');
                                    return (
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton onClick={() => {navigate(`/${lcText}`)
                                            setActive(lcText)
                                            }}
                                            sx={{backgroundColor: active === lcText ? theme.palette.secondary.selec : "transparent", color: active === lcText ? "white" : theme.palette.secondary.fontCol}}
                                            >
                                                <ListItemIcon
                                                sx ={{ ml:"0.8rem", color: active === lcText ? "white" : theme.palette.secondary.selec}}
                                                >
                                                    {icon}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                        <Divider variant='middle' sx={{marginTop:"3.6rem",borderBottomWidth: 1}}/>
                        <List sx={{
                            '& .MuiListItemButton-root:hover': {
                                backgroundColor: '#F8F8F8',
                                '&, & .MuiListItemIcon-root': {
                                  color: theme.palette.secondary.selec,
                                },
                              },
                        }}>
                            {
                                secondNav.map(({text,icon}) =>{
                                    if (!icon) {
                                        return (
                                            <Typography key={text} sx={{ m:"2.25rem 0 1rem 3rem"}}>
                                                {text}
                                            </Typography>
                                        )
                                    }
                                    const lcText = text.toLowerCase().replace(/ /g, '');
                                    return (
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton onClick={() => {navigate(`/${lcText}`)
                                            setActive(lcText)
                                            }}
                                            sx={{backgroundColor: active === lcText ? theme.palette.secondary.selec : "transparent", color: active === lcText ? "white" : theme.palette.secondary.fontCol}}
                                            >
                                                <ListItemIcon
                                                sx ={{ ml:"0.8rem", color: active === lcText ? "white" : theme.palette.secondary.selec}}
                                                >
                                                    {icon}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                </Box>
            </Box>

        </Drawer>
    )}
  </Box>
}

export default Sidebar