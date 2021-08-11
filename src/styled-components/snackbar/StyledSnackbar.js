import styled, {keyframes} from "styled-components";

const fadeIntoView = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledSnackbar = styled.div`
    position: relative;
    width: 100%;
    height: 2.5em;
    border-bottom: 2px solid grey;
    margin-bottom: 0.8em;
    padding: 10px;

  h1.heading {
    margin: 0;
    font-size: 1.6em;
  }

  .snackbar-error-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2.2em;
    margin: 0.2em auto;
    width: 65%;
    padding: 0.5em;
    font-size: 1.2em;
    border-radius: 5px;
    background-color: #F56236;
    -webkit-box-shadow: 0 5px 5px 0 rgba(173,173,173,0.49);
    box-shadow: 0 5px 5px 0 rgba(173,173,173,0.49);
    animation: 500ms ease-in ${fadeIntoView};
  }

  .snackbar-error-container button {
    -webkit-appearance: none;
    margin-right: 1em;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .error-message-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .error-message-container p {
    margin: 0;
    font-size:0.8em;
  }

  @media only screen and (min-width: 769px) {
    .snackbar-error-container {
      width: 25%;
    }
  }  
`;

export default StyledSnackbar;