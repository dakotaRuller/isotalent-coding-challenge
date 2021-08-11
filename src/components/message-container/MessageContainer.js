// Node Modules
import React from "react";
import PropTypes from "prop-types";

// Styled Components
import StyledMessageContainer from "../../styled-components/message-container/StyledMessageContainer";

const propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const MessageContainer = ({onClick, type}) => {
  return (
    <StyledMessageContainer type={type}>
      <p>Notification</p>
      <button className="clear-button" onClick={onClick}>Clear</button>
    </StyledMessageContainer>
  )
};

MessageContainer.propTypes = propTypes;

export default MessageContainer;