import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { blue, green } from '@mui/material/colors';
import { Container, flexbox } from '@mui/system';
import { Paper } from '@mui/material';

export default function Hero(props){

    return <Container sx={{py:5}}>
    <Paper elevation={4} sx={{background: 'rgba(255, 255, 255, 0.7)' , py:2}}>
    
    
    <Box sx={{my:5,px:5,display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
   
    <Typography variant="h2" component="h1" sx={{my:1}}>
      Image Finder
    </Typography>
    <Typography variant="body1" sx={{my:1}}>
      Discover endless possibilities in image search and get instant access to a world of images
    </Typography>
    
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        my:5
      }}
    >
    <TextField fullWidth label="Images" id="fullWidth" onChange={props.inputChange}></TextField>
    </Box>

    <Button variant="outlined" onClick={props.buttonClick}>search</Button>
    </Box>
    </Paper>
    </Container>
}