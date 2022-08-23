import React, {createContext, useContext} from 'react';
import {styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import './Cards.css';

export const UtilsContext = createContext();

export const useUtils = () => {
  return useContext(UtilsContext);
};

export const Search = styled('div')(({theme}) => ({
  'position': 'relative',
  'borderRadius': theme.shape.borderRadius,
  'backgroundColor': alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    'backgroundColor': alpha(theme.palette.common.white, 0.25),
  },
  'marginLeft': 0,
  'width': '100%',
  [theme.breakpoints.up('sm')]: {
    'marginLeft': theme.spacing(1),
    'width': 'auto',
  },
}));

export const StyledInputBase = styled(InputBase)(({theme}) => ({
  'color': 'inherit',
  '& .MuiInputBase-input': {
    'padding': theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    'paddingLeft': `calc(1em + ${theme.spacing(4)})`,
    'paddingRight': `calc(1em + ${theme.spacing(4)})`,
    'transition': theme.transitions.create('width'),
    'width': 'inherit',
    [theme.breakpoints.up('sm')]: {
      'width': 'inherit',
      '&:focus': {
        'width': '20ch',
      },
    },
  },
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
  'padding': theme.spacing(0, 2),
  'height': '100%',
  'position': 'absolute',
  'pointerEvents': 'none',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
}));

/**
 * Returns a dialog indicating a privated repository
 * @param {function} setAlert Sets the alert state
 * @param {boolean} alert Current alert state
 * @return {JSX}
 */
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
          Feel free to contact me at&nbsp;
          <a
            href={'mailto:edpoon02@gmail.com'}
            className='underline'
            id='underline'
          >
            edpoon02@gmail.com
          </a>
          &nbsp;or LinkedIn if you would like to see the source code.
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

/**
 * Returns a github button depeneding on its status
 * @param {JSON} card Current project to check
 * @param {function} setAlert Sets the alert state
 * @return {JSX}
 */
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

/**
 * Returns a video dialog
 * @param {Function} setVideo Sets whether the dialog is open
 * @param {Boolean} openedVideo Whether the dialog is open
 * @param {Object} project The currently selected video
 * @return {JSX}
 */
export function video(setVideo, openedVideo, project) {
  return (
    <Dialog
      open={openedVideo}
      onClose={() => setVideo(false)}
      sx={{width: '100%'}}
    >
      <DialogTitle
        sx={{
          'fontWeight': 'bold',
        }}
      >
        {'Demo Video'}
      </DialogTitle>
      <DialogContent>
        <video
          autoPlay
          muted
          id='video'
        >
          <source
            src={require('../assets/videos' + project['video'])}
            type="video/mp4"
          />
        </video>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setVideo(false)} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

