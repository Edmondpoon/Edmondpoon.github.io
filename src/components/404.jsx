import React from 'react';
import Typography from '@mui/material/Typography';
import './404.css';

/**
 * Generates a 404 page
 * @param {Object} props
 * @return {Object} JSX
 */
function PageNotFound(props) {
  return (
    <div id='notFound'>
      <Typography
        id='bolded'
        variant="h2"
        component="div"
      >
        404
      </Typography>
      <br/>
      <Typography
        variant="h5"
        component="div"
      >
        Please return to the&nbsp;
        <a
          className='underline'
          rel='noopener noreferrer'
          href='https://edmondpoon.github.io/'
        >
          Home Page.
        </a>
      </Typography>
    </div>
  );
}

export default PageNotFound;
