import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import GitHubIcon from '@mui/icons-material/GitHub';
import Pagination from '@mui/material/Pagination';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './utils.jsx';
import './Cards.css';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export function privatedAlert(setAlert, alert) {
  return (
    <Dialog
      open={alert}
      onClose={() => setAlert(false)}
    >
      <DialogTitle id='alert-dialog-title'>
        {'The source code for this project is privated.'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Feel free to contact me if you would like to see the source code.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setAlert(false)} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export function github(card, setAlert) {
  return (
    card['github'] === 'PRIVATED' ?
      <IconButton
        aria-label='Github'
        className='btn'
        onClick={() => setAlert(true)}
      >
        <GitHubIcon
          fontSize='large'
          aria-label='Github'
        />
      </IconButton> :
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={card['github']}
      >
        <IconButton
          aria-label='Github'
          className='btn'
        >
          <GitHubIcon
            fontSize='large'
            aria-label='Github'
          />
        </IconButton>
      </a>
  );
};

