import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx';
import Resume from './components/Resume.jsx';
import ProjectsView from './components/Cards.jsx';
import PageNotFound from './components/404.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DimensionsProvider from './components/DimensionsProvider.jsx';
import {UtilsContext} from './components/Utils.jsx';

/**
 * Represents the web page
 * @param {Object} props
 * @return {JSX} Jsx
 */
function App() {
  const currentView = window.location.pathname === '/' ? 'Home' :
    window.location.pathname[1].toUpperCase() +
    window.location.pathname.slice(2);
  const [view, setView] = React.useState(currentView);
  const [selectedCard, setCard] = React.useState(null);
  // Search bar query
  const [search, setSearch] = React.useState('');

  const home = (
    <div>
      <Sidebar/>
      <Home/>
    </div>
  );

  const projects = (
    <div>
      <Sidebar/>
      <ProjectsView/>
      <Project/>
    </div>
  );

  const resume = (
    <div>
      <Sidebar/>
      <Resume/>
    </div>
  );

  return (
    <div>
      <DimensionsProvider>
        <UtilsContext.Provider value={{view, setView,
          selectedCard, setCard, search, setSearch}}>
          <BrowserRouter>
            <Routes>
              <Route path={'/'} exact element={home}/>
              <Route path={'/projects'} exact element={projects}/>
              <Route path={'/resume'} exact element={resume}/>
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </BrowserRouter>
        </UtilsContext.Provider>
      </DimensionsProvider>
    </div>
  );
}

export default App;

