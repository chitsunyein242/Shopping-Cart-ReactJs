import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Link } from "react-router"
import ArrowBack from '@mui/icons-material/ArrowBack';

const NotFound = () => {
  return (
    <div style={{
        display : "flex",
        alignItems: "center",
        justifyContent: "center",
        width : "100%",
        minHeight : "100vh",
        flexDirection: "column",
        gap: "10px"
    }}>
      <Typography variant="h1" align="center" >
        404 | Not Found
      </Typography>
      <Link to='/'>
        <Button variant="outlined" startIcon={<ArrowBack />}>Go Back Home</Button>
      </Link>
    </div>
  )
}

export default NotFound
