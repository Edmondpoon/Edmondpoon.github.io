import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import {Search, StyledInputBase, SearchIconWrapper} from './Utils.jsx';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './Utils.jsx';
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
  const {search, setSearch, view, setView, setCard} = useUtils();

  const pages = ['Home', 'Projects', 'Resume'];
  const icons = [<HomeIcon/>, <FolderIcon/>, <DescriptionIcon/>];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleInput = (event) => {
    const {value} = event.target;
    setSearch(value.toLowerCase());
    if (value !== '' && view !== 'Projects') {
      setView('Projects');
    }
  };

  const clearInput = () => {
    setSearch('');
  };

  const handleClick = (page) => {
    setMobileOpen(false);
    setView(page);
    setCard(null);
  };

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
          <ListItem
            onClick={() => handleClick(box)}
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
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{display: 'flex'}} >
      <CssBaseline/>
      <AppBar position='fixed'
        sx={{zIndex: width < 750 ? 1 :(theme) => theme.zIndex.drawer + 1}}
        id='appbar'
      >
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
            hidden={width < 750}
            id='currentView'
          >
            Portfolio - {view}
          </Typography>
          <div id='stretch'/>

          <Search
            id='search'
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <IconButton
              onClick={clearInput}
              id='cancelSearch'
              sx={{
                visibility: !search ? 'hidden' : '',
              }}
            >
              <CloseIcon/>
            </IconButton>
            <StyledInputBase
              style={{width: '100%'}}
              placeholder="Search…"
              inputProps={{'aria-label': 'search', 'width': 'inherit'}}
              onChange={handleInput}
              value={search}
            />
          </Search>
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

