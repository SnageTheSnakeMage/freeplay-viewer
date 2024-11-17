import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import freeGameArray from './freeGameArray.json'

export default function App() {
  return (
    <>
        <h1 id="App-header">Free Games List Manager</h1>
        <div id="main-content">
            <BasicGrid id="grid"/>
        </div>
        
    </>
  )
}


const gridItems = freeGameArray.map((game) => {
  return (
    <Grid xs={6} sm={4} md={2} key={game.id}>
      <div>
        <p>{game.title}</p>
        <img src={game.thumbnail} alt={game.title} />
        {/* <p>{game.short_description}</p> */}
      </div>
    </Grid>
  )
})

 function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        {gridItems}
      </Grid>
    </Box>
  );
}
