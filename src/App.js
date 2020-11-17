import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline/>
        <Route path="/" exact component={Home}/>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/portfolio" exact component={Portfolio}/>
        <Route path='/contacts' exact component={Contacts}/>
    </div>
  );
}

export default App;
