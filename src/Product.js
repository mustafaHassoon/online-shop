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





export default function Product({ dispatch, price, title, quantity }) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://the-public-domain-review.imgix.net/collections/illustrations-from-a-descriptive-iconography-of-cacti-1841/cacti-thumb.jpg?w=640"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Details
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch({ type: ACTIONS.ADD_PRODUCT_TO_BASCKET, payload: { price, title } })}>Buy</Button>
      </CardActions>
    </Card>







    // <Card sx={{ maxWidth: 120 }} style={{ padding: 30 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       {title}
    //     </Typography>

    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       {price}
    //     </Typography>

    //     <Button size="small" className='product-item' >Buy</Button>
    //   </CardContent>
    //   <CardActions>

    //   </CardActions>
    // </Card>
  );
}

// export default function Product({ dispatch, price, title }) {
//   return <button className='product-item' onClick={() => dispatch({ type: ACTIONS.ADD_PRODUCT_TO_BASCKET, payload: { price, title } })}>{title}</button>
// }