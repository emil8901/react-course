import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = (props) => (
  <div>
      <NavLink to="/portfolio/1">1</NavLink>
      <NavLink to="/portfolio/2">2</NavLink>
  </div>
);

export default Portfolio;