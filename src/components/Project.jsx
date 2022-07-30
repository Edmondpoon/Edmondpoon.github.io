import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import DeleteIcon from '@mui/icons-material/Delete';
import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import Avatar from '@mui/material/Avatar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MenuItem from '@mui/material/MenuItem';
import {useUtils} from './utils.jsx';
import {styled, alpha} from '@mui/material/styles';
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
 * Generates an open email
 * @param {Object} props Props passed by the parent
 * @return {Object} JSX
 */
function Project(props) {
  const {width} = useDimensions();
  const {selectedCard, setCard, view, setView} = useUtils();

  const [state, setState] = React.useState(true);

  if (!selectedCard) {
    return (<div hidden/>);
  }

  const closeCard = () => {
    setCard(null);
  }
    console.log(selectedCard['info'])

  const list = (anchor) => (
    <Box
      onKeyDown={closeCard}
      role='presentation'
      id='opened'
    >
      <CssBaseline />
      <Toolbar sx={{'display': width > 600 ? '' : 'none'}}/>
      <Toolbar>
        <Typography
          variant='h2'
          noWrap
          component='div'
          className='paddingLeft'
          id='title'
        >
          {selectedCard['name']}
        </Typography>
        <div style={{flex: 1}}/>
        <IconButton
          color='inherit'
          onClick={closeCard}
          sx={{marginRight: {lg: '240px'}}}
        >
          <CloseIcon fontSize='large'/>
        </IconButton>
      </Toolbar>
      <Main open={state}>
        <Toolbar style={{'paddingLeft': 0}}>
          <Typography
            paragraph
            className='paddingLeft'
          >
            {selectedCard['date']}
          </Typography>
        </Toolbar>
        {selectedCard['info'].map((section) => (
          section !== 'NEWLINE' ?
          <Typography
            variant="h5"
            component='div'
            className='content paddingLeft'
            sx={{marginRight: {lg: '240px'}}}
            key={section}
          >
            {section}
          </Typography> :
          <Typography
            variant='h5'
            component='div'
            className='newline'
          />
        ))}
      </Main>
    </Box>
  );

  return (
    <Drawer
      onKeyDown={() => {closeCard}}
      PaperProps={{style: {
        width: '100%',
        height: '100%',
        marginLeft: width > 1200 ? '240px' : '0px',
      }}}
      anchor='bottom'
      open={state}
      variant='persistent'
    >
      {list('right')}
    </Drawer>
  );
}

export default Project;

