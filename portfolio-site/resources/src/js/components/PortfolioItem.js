import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = (props) => (
  <div>
      This item is {props.match.params.id}
  </div>
);

export default Portfolio;