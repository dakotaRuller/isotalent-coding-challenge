// Node Modules
import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  messages: PropTypes.shape({
    message: PropTypes.string,
    priority: PropTypes.number
  }),
  onClick: PropTypes.func.isRequired
};

const SnackbarMessage = ({message, onClick}) => {
  return (
    <div className="snackbar-error-container">
      <button className="snackbar-error-close" onClick={onClick}>X</button>
      <div className="error-message-container">
        <p>error:</p>
        <p>{message.message}</p>
      </div>
    </div>
  )
};

SnackbarMessage.propTypes = propTypes

export default SnackbarMessage;