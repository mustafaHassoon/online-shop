import { ACTIONS } from "./App"
import './App.css';
//import myImg from './14-Peace-lily.jpg';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Product({ dispatch, price, title }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>

        <Grid item xs={8}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Item>
              <Product price='2.2' title='Coca-Cola' dispatch={dispatch} ></Product>
            </Item>

          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Item>hhhhhhh
            </Item>

          </Box>
        </Grid>

      </Grid>
    </Box>






  );
}

