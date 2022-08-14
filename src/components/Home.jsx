import React from 'react';
import Typography from '@mui/material/Typography';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './Utils.jsx';
import './Home.css';

const data = require('../assets/data/About.json');

/**
 * Represents the home page
 * @param {Object} props
 * @return {JSX} Jsx
 */
function Home(props) {
  const {width} = useDimensions();
  const {view} = useUtils();
  let keyID = 0;
  return (
    <div hidden={view !== 'Home'}>
      {data[0]['home'].map((section) => (
        section !== 'NEWLINE' ?
          <Typography
            variant={width > 600 ? 'h5' : 'body1'}
            component='div'
            className='text'
            key={section}
            sx={{
              'marginLeft': {lg: '240px'},
            }}
          >
            {section}
          </Typography> :
          <Typography
            key={`Home ${keyID++}`}
            variant='h5'
            component='div'
            className='newline'
          />
      ))}
    </div>
  );
}

export default Home;
