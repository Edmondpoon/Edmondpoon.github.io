import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import {useUtils} from './Utils.jsx';
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
  const {selectedCard, setCard} = useUtils();
  let keyId = 0;
  const [state, setState] = React.useState(true);
  React.useEffect(() => {
    setState(selectedCard ? true : false);
  }, [selectedCard]);

  if (!selectedCard) {
    return (<div hidden/>);
  }

  const closeCard = () => {
    setCard(null);
  };

  const list = (anchor) => (
    <Box
      onKeyDown={closeCard}
      role='presentation'
      id='opened'
    >
      <CssBaseline />

      <Toolbar sx={{'display': width > 600 ? '' : 'none'}}/>
      <Toolbar id='title'>
        <Typography
          variant={width > 600 ? 'h2' :
            (selectedCard['name'].length < 27 ? 'h6' :
              'subtitle1')}
          noWrap
          component='div'
          className='paddingLeft'
          id='bolded'
        >
          {selectedCard['name']}
        </Typography>
        <div style={{flex: 1}}/>
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
            className='paddingLeft'
          >
            {selectedCard['date']}
          </Typography>
        </Toolbar>
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

  return (
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
      {list('right')}
    </Drawer>
  );
}

export default Project;

