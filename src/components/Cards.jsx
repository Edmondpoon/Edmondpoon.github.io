import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import GitHubIcon from '@mui/icons-material/GitHub';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled, useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './utils.jsx';
import './Cards.css';

const data = require('../data/Projects.json');

function ProjectsView(props) {
  let {view, setView, selectedCard, setCard} = useUtils();
  const {width} = useDimensions();

  const selectProject = (event, project) => {
    if (event.target.ariaLabel === 'Github') {
      return;
    }
    setCard(project);
  }

  return (
    <Grid
      container
      spacing={12}
      id='cards'
      justifyContent="center"
      sx={{
        'display': (view !== 'Projects' ||
          selectedCard) ? 'none' : '',
        'paddingLeft': {lg: '240px'},
        'position': {lg: 'absolute'},
      }}
    >
      {data.map((card, index) => (
        <Grid key={card['name']} item
          className='card'
          style={{
            paddingLeft: '25px',
            paddingTop: '50px'
          }}
          onClick={(event) => selectProject(event, card)}
        >
          <Card
            className='cursor'
            sx={{width: 345}}
          >
            <CardHeader
              title={card['name']}
              subheader={card['data']}
            />
            <CardMedia
              component="img"
              height="194"
              alt={card['name']}
            />
            <CardContent className='description'>
              <Typography variant="body2" color="text.secondary">
                {card['description']}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={card['github']}
              >
                <IconButton
                  aria-label="Github"
                  className='btn'
                >
                  <GitHubIcon
                    fontSize='large'
                    aria-label='Github'
                  />
                </IconButton>
              </a>
              
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

}

export default ProjectsView;
