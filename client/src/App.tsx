import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import {useMemo} from 'react'
import { themeSettings } from './theme'
import Navbar from './pages/navbar'
import Dashboard from './pages/dashboard'
import Predictions from './pages/predictions'
function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);  // empty because need only one time render
    return (
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme = {theme}>
            <CssBaseline/>     {/* removes initail basic css */}
            <Box sx={{width:"100%", height:"100%", p:'1rem 2rem 4rem 2rem'}}>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route
                path="/predictions"
                element={<Predictions/>}
                />
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
      
  )
}

export default App
