import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleResetState}
    contentLabel="Modal"
  >
    <h1>Modal Content</h1>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.handleResetState}
    >
      Okay
    </button>
  </Modal>
);

export default OptionModal;
