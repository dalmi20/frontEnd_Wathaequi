import logo from './logo.svg';
import {CssBaseline,ThemeProvider} from '@mui/material'
import {createTheme} from "@mui/material/styles"
import {useSelector} from "react-redux"
import {themeSettings} from "theme"
import { useMemo } from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';
import TraiterDemande from 'scenes/traiterDemande';
import DemandeDetails from 'scenes/demandeDetails';


function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Navigate to="/citizenmanagement" replace/>}/>
              <Route path='/citizenmanagement' element={<Dashboard/>}/>
              <Route path='/traiterdemande' element={<TraiterDemande/>}/>
              <Route path='/traiterdemande/details' element={<DemandeDetails/>}/>
              </Route>
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
