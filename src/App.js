import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Features from './components/Features';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Features" component={Features} />
      </Switch>
    </div>
  </Router>
);

export default App;
