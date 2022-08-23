import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import {video, useUtils, github} from './Utils.jsx';
import {styled} from '@mui/material/styles';
import {useDimensions} from './DimensionsProvider.jsx';

import './Project.css';

const drawerWidth = 240;
const Main = styled('main')(
  ({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    paddingTop: '0px',
    ...({
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

/**
 * Represents the chosen project
 * @param {Object} props Props passed by the parent
 * @return {Object} JSX
 */
function Project(props) {
  const {width} = useDimensions();
  const {selectedCard, setCard, setAlert} = useUtils();
  let keyId = 0;
  // Whether the drawer is open or closed
  const [state, setState] = React.useState(true);
  // Whether the video alert is open or not
  const [openedVideo, setVideo] = React.useState(false);
  // Current slide shown for slideshow
  const [index, setIndex] = React.useState(0);
  const timeout = React.useRef(null);

  const resetTimer = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  const closeCard = () => {
    setIndex(0);
    setCard(null);
  };

  const changeIndex = (direction) => {
    switch (direction) {
    case 'left':
      setIndex(index - 1 < 0 ? selectedCard['display'].length - 1 : index - 1);
      break;
    case 'right':
      setIndex(index + 1 >= selectedCard['display'].length ? 0 : index + 1);
      break;
    default: ;
    }
  };

  React.useEffect(() => {
    setState(selectedCard ? true : false);
  }, [selectedCard]);

  React.useEffect(() => {
    resetTimer();
    if (selectedCard) {
      timeout.current = setTimeout(() =>
        setIndex((prevIndex) =>
          prevIndex + 1 < selectedCard['display'].length ? prevIndex + 1 : 0,
        ), 5000);
    }

    return () => {
      resetTimer();
    };
  }, [selectedCard, index]);

  const transition = (direction) => (
    <div
      className='translate'
      onClick={() => changeIndex(direction)}
      style={{
        lineHeight: `${Math.floor(width / 2)}px`,
        height: `${Math.floor(width / 2)}px`,
        marginRight: (width > 1200 && direction === 'right') ?
          '240px' : '0px',
      }}
    >
      {direction === 'left' ?
        <KeyboardArrowLeftIcon
          fontSize='large'
          className='centered'
        /> :
        <ChevronRightIcon
          fontSize='large'
          className='centered'
        />
      }
    </div>
  );

  const slideshow = () => (
    <div className='slideshow'>
      {transition('left')}
      <div>
        {selectedCard['display'].map((image, ind) => (
          <div
            key={image}
            style={{
              'display': `${ind === index ? '' : 'none'}`,
            }}
          >
            <img
              src={require('../assets/images/projects' + image)}
              id='image'
              style={{
                width: '100%',
                height: `${Math.floor(width / 2)}px`,
              }}
              alt='...'
            />
          </div>
        ))}
      </div>
      {transition('right')}
    </div>
  );

  const list = () => (
    <Box
      onKeyDown={closeCard}
      role='presentation'
      id='opened'
    >
      <CssBaseline />

      <Toolbar sx={{'display': width > 750 ? '' : 'none'}}/>
      <Toolbar id='title'>
        <Typography
          variant={width > 600 ? 'h4' : 'h6'}
          noWrap
          component='div'
          className='paddingLeft'
          id='bolded'
        >
          {selectedCard['name']}
        </Typography>
        <div style={{flex: 1}}/>
        <IconButton
          sx={{
            marginRight: {sm: '0px', lg: '250px'},
            right: {xs: '25px', md: '35px', lg: '45px'},
          }}
          color='inherit'
          id='vid'
          onClick={() => setVideo(true)}
        >
          <OndemandVideoIcon fontSize='large'/>
        </IconButton>
        <IconButton
          color='inherit'
          id='close'
          onClick={closeCard}
          sx={{
            right: {xs: '0px', sm: '8px', md: '16px', lg: '24px'},
          }}
        >
          <CloseIcon fontSize='large'/>
        </IconButton>
      </Toolbar>
      <Main open={state}>
        <Toolbar style={{'paddingLeft': 0}}>
          <Typography
            paragraph
            className='paddingLeft date'
          >
            {selectedCard['date']}
          </Typography>
          {github(selectedCard, setAlert)}
        </Toolbar>
        {slideshow()}
        {selectedCard['info'].map((section) => (
          section !== 'NEWLINE' ?
            <Typography
              variant={width > 600 ? 'h5' : 'body1'}
              component='div'
              className='content paddingLeft'
              sx={{marginRight: {lg: '240px'}}}
              key={section}
            >
              {section}
            </Typography> :
            <Typography
              component='div'
              className='newline'
              key={`${selectedCard['name']} ${keyId++}`}
            />
        ))}
      </Main>
    </Box>
  );

  if (!selectedCard) {
    return (<div hidden/>);
  }

  return (
    <div>
      <Drawer
        onKeyDown={closeCard}
        PaperProps={{style: {
          width: '100%',
          height: '100%',
          marginLeft: width > 1200 ? '240px' : '0px',
        }}}
        anchor='bottom'
        open={state}
        variant='persistent'
      >
        {list()}
      </Drawer>
      {video(setVideo, openedVideo, selectedCard)}
    </div>
  );
}

export default Project;

