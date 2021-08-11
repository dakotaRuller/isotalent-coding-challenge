import styled, {keyframes} from "styled-components";

const fadeIntoView = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledMessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.2em;
    margin: 0.2em auto;
    width: 90%;
    padding: 0.5em;
    font-size: 1.2em;
    border-radius: 5px;
    background-color: ${props => {
      if (props.type === "error") {
          return "#F56236";
        } else if (props.type === "warning") {
          return "#FCE788"
        } else if (props.type === "info") {
          return "#88FCA3"
        }
      }
    };
    -webkit-box-shadow: 0px 5px 5px 0px rgba(173,173,173,0.49);
    box-shadow: 0px 5px 5px 0px rgba(173,173,173,0.49);
    animation: 500ms ease-in ${fadeIntoView};

  .message-container p, .message-container button {
    margin: 0;
  }

  .message-container p {
    align-self: flex-start;
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
  }

  button.clear-button {
    -webkit-appearance: none;
    border: none;
    background-color: transparent;
    font-size: 0.8em;
    cursor: pointer;
  }
`;

export default StyledMessageContainer;