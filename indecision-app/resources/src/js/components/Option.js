import React from 'react';

// stateless functional component
const Option = (props) => (
  <div>
    {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
     >
      remove
    </button>
  </div>
);

export default Option;
