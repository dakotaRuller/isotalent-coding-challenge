import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }

  .app {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 15em;
    margin: 1em auto;
  }

  .messages-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
    margin: 0 auto;
  }

  .errors, .warnings, .info {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 0.5em;
  }

  .errors h2, .warnings h2, .info h2 {
    margin-bottom: 0;
  }

  .errors p, .warnings p, .info p {
    margin-top: 0.2em;
    font-size: 0.8em;
  }
  
  .errors .container, .warnings .container, .info .container {
    max-height: 80vh;
    overflow-y: scroll;
  }

  @media only screen and (min-width: 769px) {
    .messages-container {
      flex-direction: row;
    }
    .errors, .warnings, .info {
      width: 30%;
      margin: 0;
    }
  }
`

export default GlobalStyles;