import {useState} from 'react'
import { Link } from 'react-router-dom'
import {Box,Button,Typography, useTheme} from '@mui/material'
import FlexBetween from '../../components/FlexBetween'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

type Props = {}

const Navbar = (props: Props) => {
  const { palette } = useTheme();
   const [selected, setSelected] = useState("dashboard")

  return (
    <div>
      <FlexBetween
      mb="0.25rem"        // margin bottom
      color={palette.grey[500]}
      p="0.5rem 0rem"   // padding
      >
      {/* Left side*/}  
      <FlexBetween gap="0.75rem">
        <MonetizationOnIcon sx={{fontSize:"28px"}}/>
        <Typography variant="h4" fontSize="16px">
          Finance
        </Typography>
      </FlexBetween>
      
{/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        
        <Button color="primary">
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[600],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Button>
        
        <Button color="primary">
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[600],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Button>
    
      </FlexBetween>
    
    </FlexBetween>
    </div> 
  )
}

export default Navbar