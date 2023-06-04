import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
import { Box, Button, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import CircleIcon from '@mui/icons-material/Circle';

const DemandeDetails = () => {

    const {state} = useLocation()
    const theme = useTheme()
    console.log(state);
    const [complet,setComplex] = useState([])
    const mesDemandes = [
      {
        nom:"Extrait de naissance",
        paragraphe:"Le document sera generé depuis information personellle selon le système",
        folder:[
          {
            name:"Passport"
          }
        ]
      }
    ]


  return (
    <Box
    width="100%"
    display="flex"
    padding="1.3rem"
    zIndex="1">
      {
        mesDemandes.map(demande => (
          <Box
          display="flex"
          flexDirection="column"
          bgcolor="white"
          width="100%"
          borderRadius="0.5rem"
          
          >
            <Typography variant='h2' color={theme.palette.secondary.fontCol} fontWeight="bold" sx={{marginLeft:"1.3rem",marginTop:"1.1rem",marginBottom:"1.1rem"}} >{demande.nom}</Typography>
            <Box display="flex" justifyContent="start" sx={{ borderTop: 1.5, borderColor:theme.palette.secondary.fontCol }} pb="1rem"  pt="0.7rem" width="100%">
                {demande.folder.map(e => (
                  <Box
                  display="flex"
                  pl="1.2rem"
                  alignItems="center"
                  >
                    <CircleIcon/>
                    <Typography color="black" variant='h3' sx={{marginLeft:"1.1rem"}}>{demande.paragraphe}</Typography>
                  </Box>
                ))}
            </Box>
            <Box display="flex" justifyContent="end" pt="0.7rem" pr="1.3rem" pb="1.2rem" width="100%">
            <Button variant="contained" color='secondary' sx={{borderRadius:1,width:"10%"}} disableElevation>
                  Creer
            </Button>
            </Box>
          </Box>
        ))
      }
    </Box>
  )
}

export default DemandeDetails