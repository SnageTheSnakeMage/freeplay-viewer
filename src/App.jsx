import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Paper, styled, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import freeGameArray from './freeGameArray.json';
import navBar from './navBar';
import Game from './Game';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default App => {

  const [darkMode, setDarkMode] = useState(false);
  
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h4">Free Games List Manager</Typography>
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Box>
      <navBar />
      <div id="main-content">
        <BasicGrid />
      </div>
    </ThemeProvider>
  );
};



const gridItems = freeGameArray.map((game) => {
  return (
    <Grid item xs={6} sm={4} md={2} key={game.id} zeroMinWidth>
      <Item>
        <Button href={game.game_url}>
          <Box
            sx={{
              width: '100%',
              height: '150px',  
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              style={{
                width: '100%',       
                height: '100%',       
                objectFit: 'cover',   
              }}
            />
          </Box>
        </Button>
        <Typography variant="h6" style={{ overflowWrap: 'break-word' }}>
          {game.title}
        </Typography>
      </Item>
    </Grid>
  );
});


 function BasicGrid() {
  return (
    <Box>
      <Grid container spacing={2}  direction="row" sx={{ justifyContent: "center", alignItems: "center",}}>
        {gridItems}
      </Grid>
    </Box>
  );
}




