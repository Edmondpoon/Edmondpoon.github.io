import React from 'react';
import {useDimensions} from './DimensionsProvider.jsx';
import {useUtils} from './Utils.jsx';
import {Document, Page, pdfjs} from 'react-pdf';
import Typography from '@mui/material/Typography';
import './Resume.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

/**
 * Represents the home page
 * @param {Object} props
 * @return {JSX} Jsx
 */
function Resume(props) {
  const {height, width} = useDimensions();
  const {view} = useUtils();
  return (
    <div
      id='resume'
      hidden={view !== 'Resume'}
      style={{
        paddingLeft: width > 1200 ?
          `${240 + Math.floor((width - 1340) / 2)}px` : '0px',
      }}
    >
      <Typography
        id='info'
        variant={'h5'}
        component="div"
      >
        Here is a&nbsp;
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={require('../assets/images/resume/Resume.pdf')}
          id='resumeLink'
        >
          direct link
        </a>
        &nbsp;to my resume.
      </Typography>
      <div>
        <Document
          file={require('../assets/images/resume/Resume.pdf')}
          options={options}
          loading=''
        >
          <Page
            pageNumber={1}
            width={width > 1200 ? 1100 : width}
            height={height}
          />
        </Document>
      </div>
    </div>
  );
}

export default Resume;

