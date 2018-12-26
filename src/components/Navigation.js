import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <ul>
      <li><Link to="/"><h3>Home</h3></Link></li>
      <li><Link to="/About"><h3>About</h3></Link></li>
      <li><Link to="/Portfolio"><h3>Portfolio</h3></Link></li>
      <li><Link to="/Resume"><h3>Resume</h3></Link></li>
      <li><Link to="/Contact"><h3>Contact me</h3></Link></li>
      <li><Link to="/Features"><h3>Feature Demonstrations</h3></Link></li>
    </ul>
  </header>
);

export default Navigation;
