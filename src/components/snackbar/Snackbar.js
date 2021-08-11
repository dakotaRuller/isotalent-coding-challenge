// Node Modules
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

// Components
import SnackbarMessage from "./SnackbarMessage";

// Styled Components
import StyledSnackbar from "../../styled-components/snackbar/StyledSnackbar";

const propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    priority: PropTypes.number
  })
};

const Snackbar = ({message}) => {
  const [displayError, setDisplayError] = useState(true);

  useEffect(() => {
    if(displayError === false) {
      setDisplayError(true)
    } else {
      setTimeout(() => {
        setDisplayError(false)
      }, 2000);
    }
  }, [message]);

  const removeError = e => {
    e.preventDefault();
    setDisplayError(false);
  }

  return (
    <StyledSnackbar>
      <h1 className="heading">Help.com Coding Challenge</h1>
      {(displayError && message !== undefined) && (
        <SnackbarMessage message={message} onClick={removeError}/>
      )}
    </StyledSnackbar>
  )
};

Snackbar.propTypes = propTypes

export default Snackbar;