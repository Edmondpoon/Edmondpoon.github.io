import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import GitHubIcon from '@mui/icons-material/GitHub';
import Pagination from '@mui/material/Pagination';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './utils.jsx';
import SearchIcon from '@mui/icons-material/Search';
import {Search, StyledInputBase, privatedAlert, github} from './CardsUtils.jsx';
import './Cards.css';

const data = require('../assets/data/Projects.json');

/**
 * Returns the number of projects that appear on the
 * page at once
 * @param {Integer} width Window width
 * @return {Integer} Number of projects
 */
function calculateSize(width) {
  let size = 2;
  if (width > 1100) {
    size = 6;
  } else if (width > 800) {
    size = 4;
  }
  return size;
}

/**
 * Represents clicking on a specific project
 * @param {Object} props
 * @return {JSX} Jsx
 */
function ProjectsView(props) {
  const {view, selectedCard, setCard} = useUtils();
  const {width} = useDimensions();
  const coverUrl = {
    'Tetris': require('../assets/images/preview/tetris.png'),
    'Checkers': require('../assets/images/preview/checkers.png'),
    'Huffman Coding': require('../assets/images/preview/huffman.png'),
    'Public-Key Encryption': require('../assets/images/preview/rsa.png'),
    'Full-Stack Email Manager':
      require('../assets/images/preview/fullStack.png'),
    'Portfolio Webpage': require('../assets/images/preview/portfolio.png'),
    'Multi-Threaded HTTP Server':
      require('../assets/images/preview/server.png'),
  };

  // 0-indexed to make sectioning easier
  const [page, setPage] = React.useState(0);
  // Represents whether the alert is in use
  const [alert, setAlert] = React.useState(false);
  // Number of cards per page depending on size
  const [size, setSize] = React.useState(calculateSize(width));
  // Current projects considered
  const [projects, setProjects] = React.useState(data);
  // Number of pagination pages
  const [paginationCount, setCount] = React.useState(Math.ceil(data.length / size));
  // Search bar query
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    // Edge case when resizing on a single device (f12)
    setSize(calculateSize(width));
  }, [width]);

  React.useEffect(() => {
    // Reset page number to first page when swapping pages
    setPage(0);
  }, [view]);

  const handleInput = (event) => {
    const {value} = event.target;
    setSearch(value.toLowerCase());
    filterProjects(value.toLowerCase());
  };

  const clearInput = () => {
    setSearch('');
    setProjects(data);
    setCount(Math.ceil(data.length / size))
  }

  const selectProject = (event, project) => {
    if (event.target.ariaLabel === 'Github') {
      return;
    }
    setCard(project);
  };

  const filterProjects = (s) => {
    // Filter by search query
    let filtered = data.filter((proj) => proj['name'].toLowerCase().match(s));
    switch (filtered.length) {
    case 0:
      setCount(1);
      break;
    default:
      setCount(Math.ceil(filtered.length / size))
      break;
    }
    setProjects(filtered);
  }

  const handlePage = (event, value) => {
    setPage(value - 1);
  };

  return (
    <div>
      <Search
        id='search'
        sx={{
          'display': view !== 'Projects' ? 'none' : 'flex',
          'paddingLeft': {lg: '240px'},
        }}
      >
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleInput}
          value={search}
        />
        <IconButton
          onClick={clearInput}
          sx={{
            display: !search ? 'none' : '',
            float: 'right'
          }}
        >
          <CloseIcon/>
        </IconButton>
      </Search>
      <Grid
        container
        spacing={12}
        id='cards'
        justifyContent='center'
        sx={{
          'display': (view !== 'Projects' ||
            selectedCard) ? 'none' : '',
          'paddingBottom': '100px',
          'paddingLeft': {lg: '240px'},
          'position': {lg: 'absolute'},
        }}
      >
        {projects.slice(size * page, size * (page + 1)).map((card, index) => (
          <Grid key={card['name']} item
            id='spacing'
          >
            <Card
              className='card'
              onClick={(event) => selectProject(event, card)}
            >
              <CardHeader
                title={card['name']}
                subheader={card['date']}
                id='separator'
              />
              <CardMedia
                component='img'
                image={coverUrl[card['name']]}
                height='250'
                alt={card['name']}
                id='separator'
              />
              <CardContent className='description'>
                <Typography variant='body2' color='text.secondary'>
                  {card['description']}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                {github(card, setAlert)}
                <div id='stretch'/>
                <Typography variant='' display='block'>
                  Click For More...&nbsp;&nbsp;
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{
          'display': view !== 'Projects' ? 'none' : 'flex',
          'paddingLeft': {lg: '240px'},
        }}
        id='select'
        page={page + 1}
        count={paginationCount}
        onChange={handlePage}
      />
      {privatedAlert(setAlert, alert)}
    </div>
  );
}

export default ProjectsView;
