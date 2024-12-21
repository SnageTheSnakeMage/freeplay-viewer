import { AppBar, Toolbar, IconButton, Typography, Link } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Free Games List Manager
        </Typography>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          Home
        </Link>
        <Link href="#" color="inherit">
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
};