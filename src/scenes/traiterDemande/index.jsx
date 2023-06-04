import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DescriptionOutlined,AccessTime,CheckCircle } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import DemandeDetails from 'scenes/demandeDetails'
import Axios from 'axios'


const TraiterDemande = () => {
  let navigate = useNavigate();
  const [data,setData] = useState([])
  

  useEffect(()=>{
    const getDemandes = Axios.get("http://localhost:7778/demande/api/all",{
      headers:{"Authorization" : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTixST0xFX0FHRU5ULFJPTEVfQ0lUSVpFTiIsImlhdCI6MTY4NTg4NTI5MCwiZXhwIjoxNjg1OTAzMjkwfQ.qt88ReooXgVVebE_ogXsDPqoXhx9GeWi9PPPplosKP4`}
    }).then((response) =>{
      setData(response.data)
      console.log("response",response);
    })
  },[])


  const element = [
    {
      id:1,
      title:"Extrait de naissance",
      date: "23/03/26 16:55",
      valide:"pret",
      a:true,
      icon: <DescriptionOutlined sx={{fontSize:"3rem"}}/>
    },
    {
      id:2,
      title:"Extrait de naissan",
      date: "23/03/26 16:55",
      valide:"en attente",
      a:false,
      icon: <DescriptionOutlined sx={{fontSize:"3rem"}}/>
    }
  ]

  const handleClick = (object) =>{
    console.log(object.title);
    
    /*navigate(`/traiterdemande/details/${object.id}`,{
      state:{
        id:object.id,
        title:object.nom,
        date:object.dateDeCreation,
        etats:object.etats
      }
    }) */

  }

  return (
    <Box
    width="100%"
    display="flex"
    padding="1.3rem"
    zIndex="1"
    >
        <Grid container spacing={2}>
          {
            data.map(e => (
              <Grid item key={e.id} xs={12} md={6} lg={3} >
                <Paper>
                  <Box display="flex" flexDirection="column" alignItems="center" pt="2rem" pb="1rem">
                    <Box >
                      { e.nom === "Extrait de naissance" ? <DescriptionOutlined sx={{fontSize:"3rem"}}/> : {} }
                    </Box>
                    <Typography color="black" fontWeight="bold" variant='h5'>{e.nom}</Typography>
                    <Typography variant='h6'>{e.dateDeCreation}</Typography>
                    {e.etats === "CREATED" ? 
                    <Box mt="1rem" display="flex" alignItems="center">
                      <CheckCircle/>
                      <Typography ml="0.3rem" variant='h6'>{e.etats}</Typography>
                    </Box> : 
                    <Box mt="1rem" display="flex" alignItems="center">
                      <AccessTime/>
                      <Typography ml="0.3rem" variant='h6'>{e.etats}</Typography>
                    </Box>
                    }
                    <Box display="flex" justifyContent="center" sx={{ borderTop: 1, borderColor:"#C0C0C0" }} mt="1.8rem" pt="0.7rem" width="65%">
                      <Button onClick={()=>handleClick(e)} variant="contained" color='secondary' sx={{borderRadius:0}} disableElevation>
                        Ajouter
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))
          }
        </Grid>
    </Box>
  )
}


export default TraiterDemande