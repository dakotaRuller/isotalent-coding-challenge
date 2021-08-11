// Node Modules
import React, { Component } from 'react';

// Components
import Button from '@material-ui/core/Button';
import MessageContainer from '../message-container/MessageContainer';
import Snackbar from "../snackbar/Snackbar";

// Services
import Api from '../../api';

// Styled Components
import GlobalStyles from "../../styled-components/GlobalStyles";

class MessageList extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
    });
  }

  removeMessage(message) {
    const updatedMessages = this.state.messages.filter(i => i.message !== message);

    this.setState({
      messages: [
        ...updatedMessages
      ]
    })
  }

  renderToggleButton() {
    const isApiStarted = this.api.isStarted()
    return (
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          if (isApiStarted) {
            this.api.stop()
          } else {
            this.api.start()
          }
          this.forceUpdate()
        }}
      >
        {isApiStarted ? 'STOP' : 'START'}
      </Button>
    )
  }

  renderSnackBar() {
    const errors = this.state.messages.filter(i => i.priority === 1);
    return (
      <Snackbar message={errors[errors.length - 1]}/>
    )
  }

  renderMessageColumn(type, priority) {
    const messageType = this.state.messages.filter(i => i.priority === priority);
    return (
      <>
        <h2>{type} Type {priority}</h2>
        <p className="error-count-text">Count {messageType.length}</p>
        <div className="container">
          {messageType.map((i, key) => (
            <MessageContainer
              key={key}
              type={type.toLowerCase()}
              onClick={() => this.removeMessage(i.message)}/>
          ))}
        </div>
      </>
    )
  }

  render() {
    return (
      <div className={"app"}>
        <GlobalStyles />
        {this.renderSnackBar()}
        <div className={"buttons-container"}>
          {this.renderToggleButton()}
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
                this.setState({
                  messages: []
                })
              }
            }
          >CLEAR</Button>
        </div>
        <div className="messages-container">
          <div className="errors">
            {this.renderMessageColumn("Error", 1)}
          </div>
          <div className="warnings">
            {this.renderMessageColumn("Warning", 2)}
          </div>
          <div className='info'>
            {this.renderMessageColumn("Info", 3)}
          </div>
        </div>
      </div>
    )
  }
}

export default MessageList
