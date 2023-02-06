import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import MenuIcon  from '@mui/icons-material/Menu'

function Barra(params) {
    return <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{  }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Puzzle
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>

}

export default Barra