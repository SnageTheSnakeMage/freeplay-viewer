import * as React from 'react';
import Box from '@mui/material/Box';
import freeGameArray from './freeGameArray.json'
import { Button, Typography, } from '@mui/material';

//was for individual pages for each game but ran out of time

export default function GamePage(key) {
    return (
        <Game game={freeGameArray[key]}/>
    )
}

function Game(game) {
    return (
        <Box>
            <Box id="mainContent">
                <Typography variant="h1">{game.title}</Typography>
                <Button></Button>
                <img src={game.thumbnail} alt={game.title + " image"} />
                <Typography variant='subtitle'>{game.short_description}</Typography>
            </Box>
            <Box id="sidebar">
                <Typography>Developer: {game.developer}</Typography>
                <Typography>Publisher: {game.publisher}</Typography>
                <Typography>Genre: {game.genre}</Typography>
                <Typography>Platform(s): {game.platform}</Typography>
                <Typography>Release Date: {game.release_date}</Typography>
            </Box>
        </Box>
    )
}