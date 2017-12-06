import React from 'react';

// stateless functional component
const Action = (props) => (
  <div>
    <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
          What should I do?
    </button>
  </div>
);

export default Action;
