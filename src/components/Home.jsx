import React from 'react';
import Typography from '@mui/material/Typography';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './utils.jsx';
import './Home.css';

const data = require('../data/About.json');

function Home(props) {
  let {view, setView, selectedCard, setCard} = useUtils();
  const {width} = useDimensions();
  return (
    <div
      hidden={view !== 'Home'}
    >
      {data[0]['home'].map((section) => (
        section !== 'NEWLINE' ?
        <Typography
          variant="h5"
          component='div'
          className='text'
          key={section}
          sx={{
            'marginLeft': {lg: '240px'}
          }}
        >
          {section}
        </Typography> :
        <Typography
          variant="h5"
          component='div'
          className='newline'
        />
      ))}
    </div>
  );
}

export default Home;
