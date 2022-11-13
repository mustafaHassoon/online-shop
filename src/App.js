/* eslint-disable default-case */
import './App.css';

import Product from './Product';

import Header from './Header';

import { v4 as uuid } from 'uuid';



import { useReducer, useState } from 'react'

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
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export const ACTIONS = {
  ADD_PRODUCT_TO_BASCKET: 'Add-product-to-bascket',
  UPDATE_PAYMENT: 'update-payment',
  RESET: 'reset',
  CALCULATE_RETURN: 'calculate-return',
  CALCULATE_RETURN_CURRENCY: 'calculate-return-currency',
}



function reducer(state, { type, payload }) {
  console.log(state)
  switch (type) {
    case ACTIONS.ADD_PRODUCT_TO_BASCKET:
      let newObject = {
        title: payload.title,
        price: payload.price,
        quantity: 1,
        id: uuid()
      }
      console.log(newObject)
      return {
        ...state,
        //currentBascket: parseFloat(state.currentBascket) + parseFloat(payload.price),
        currentBascket: [...state.currentBascket, newObject]

      }
    case ACTIONS.UPDATE_PAYMENT:
      return {
        ...state,
        payment: payload.payment,
      }
    case ACTIONS.CALCULATE_RETURN:
      console.log(state)
      return {
        ...state,
        returns: parseFloat(state.payment) - parseFloat(state.currentBascket)
      }
    case ACTIONS.RESET:
      return {
        ...state,
        currentBascket: 0,
        returns: 0,
        payment: 0,
        returnCurrency: []
      }
    case ACTIONS.CALCULATE_RETURN_CURRENCY:
      console.log(state)
      return {
        ...state,
        returnCurrency: calculateReturns(state),
      }
  }
}

function calculateReturns({ returns, returnCurrency }) {
  let amount = 0;
  let currencies = [20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05]
  for (let i = 0; i < currencies.length; i++) {
    let currentCurrency = currencies[i];

    if (currencies[i] <= returns) {
      returns = returns - currencies[i]
      returns = Math.round(returns * 100) / 100
      amount++

      i--
      continue;
    }

    if (currencies[i] > returns) {
      if (amount !== 0) {
        let currencyReturn = {
          currentCurrency,
          amount
        }
        amount = 0;

        returnCurrency.push(currencyReturn)
      }
    }
  }

  return returnCurrency
}


function RenderingArrayOfObjects(data) {

  const listItems = data.map(
    (element) => {
      return (
        <ul type="disc">
          <li style={{
            fontWeight: 'bold',
            color: 'red'
          }}
          >
            {element.State}
          </li>
          <li>{element.Capital}</li>
        </ul>
      )
    }
  )
  return (
    <div>
      {listItems}
    </div>
  )
}



function App() {

  const [{ currentBascket, returns, payment, returnCurrency }, dispatch] = useReducer(reducer, { currentBascket: [], returns: 0, payment: 0, returnCurrency: [] })

  function handelSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.CALCULATE_RETURN, payload: { payment: e.target.value } })
    dispatch({ type: ACTIONS.CALCULATE_RETURN_CURRENCY })
  }



  return (

    <Container maxWidth="lg">
      <Header></Header>
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
                <Product price='2.2' title='Coxxxxxxxxxxxxxxxxxxxxxca-Cola' dispatch={dispatch} ></Product>
              </Item>

            </Box>


          </Grid>

          <Grid item xs={4}>

          </Grid>
        </Grid>
      </Box>
    </Container>


  );
}

export default App;
