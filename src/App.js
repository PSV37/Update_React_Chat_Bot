import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sendMessage} from './chat'
import ChatPage from './ChatPage'

class App extends Component {
  render() {
    const { feed, sendMessage } = this.props
    return (
      <div className="row">
      <ChatPage />
       {/*  <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <h1>Hello bot</h1>
          <ul>
          {
            feed.map(entry =>
              {
                if(entry.sender == 'bot') {
                  return 'bot from bot'
                } else {
                  return 'user'
                }
              }
            )
          }
          </ul>
          <input type="text" onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null } />
        </div>
        <div className="col-md-4"></div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state
  }
}

export default connect(mapStateToProps, {sendMessage})(App);
