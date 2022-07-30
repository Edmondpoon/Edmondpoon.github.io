import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DescriptionIcon from '@mui/icons-material/Description';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './utils.jsx';
import {useNavigate} from 'react-router-dom';
import './Sidebar.css';

const drawerWidth = 240;

/**
 * Generates a sidebar
 * @param {Object} props Props passed by the parent
 * @return {Object} JSX
 */
function Sidebar(props) {
  const {width} = useDimensions();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {view, setView} = useUtils();
  const history = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (page) => {
    setMobileOpen(false);
    setView(page);
  }

  const pages = ['Home', 'Resume', 'Projects'];
  const icons = [<HomeIcon/>, <DescriptionIcon/>, <FolderIcon/>];

  const drawer = (
    <div>
      <Toolbar>
        Portfolio - {view}
        <div id='stretch'/>
        <IconButton
          onClick={handleDrawerToggle}
        >
          <ChevronLeftIcon/>
        </IconButton>
        
      </Toolbar>
      <Divider />
      <List>
        {pages.map((box, index) => (
          <div key={box}
            onClick={() => handleClick(box)}
          >
            <ListItem
              key={box}
              disablePadding
              hidden={!mobileOpen &&
                width < 1200}
           >
              <ListItemButton>
                <ListItemIcon>
                  {icons[index]}
                </ListItemIcon>
                <Typography
                  sx={{'fontWeight':
                    box === view ? 'bold' : '',
                  }}
                >
                  {box}
                </Typography>
              </ListItemButton>
            </ListItem>
          </div>
        ))}
        <Divider />
      </List>
    </div>
  );

  return (
    <Box sx={{display: 'flex'}} >
      <CssBaseline/>
      <AppBar position='fixed'
        sx={{zIndex: width < 600 ? 1 :(theme) => theme.zIndex.drawer + 1}}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='toggle drawer'
            id='toggleDrawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {lg: 'none'}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            hidden={width < 600}
            id='title'
          >
            Portfolio - {view}
          </Typography>
            

          <div id='stretch'/>
          <a
            className='social'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/edmond-poon-446b0a20b/'
          >
            <IconButton
              color='inherit'
              edge='start'
              id='linkedIn'
            >
              <LinkedInIcon fontSize='large'/>
            </IconButton>
          </a>
          <a
            className='social'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/Edmondpoon'
          >
            <IconButton
              color='inherit'
              edge='start'
            >
              <GitHubIcon fontSize='large'/>
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>

      <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        aria-label='mailbox folders'
      >
        <Drawer
          variant={mobileOpen ? 'temporary' : 'permanent'}
          open={mobileOpen}
          onClose={mobileOpen ? handleDrawerToggle : null}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            'display': {'xs': mobileOpen ? 'block' : 'none',
              'lg': mobileOpen ? 'none' : 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;

