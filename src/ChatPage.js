import React, { Component } from 'react';
import './App.css';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { connect } from 'react-redux'
import { sendMessage} from './chat'



class ChatPage extends Component {
  state = {
    isShowChatbot:false,
    isButton:true
  }

  handleChatbot = () => {
    this.setState({
      isShowChatbot:true,
      isButton:false
    })
  }

  removeChatbot = () => {
    this.setState({
      isShowChatbot:false,
      isButton:true
    })
  }

  render() {
    const { feed, sendMessage } = this.props
    const {isShowChatbot, isButton} = this.state;
    console.log('payload')
    console.log(this.props)
    return (
        <div className="container text-center">
      {isShowChatbot ? (
        <React.Fragment>
        <div className="row">
            <hr />
            MORE
            <a >
              Creative User Profile</a>,
            <a target="_blank" href="http://bootsnipp.com/snippets/GXzyP">Open in chat (popup-box chat-popup)</a>
            <aside id="sidebar_secondary" className="popup-box-on tabbed_sidebar ng-scope chat_sidebar">
              <div className="popup-head">
                <div className="popup-head-left pull-left">
                  <a title="Gurdeep Osahan (Web Designer)" target="_blank" href="https://web.facebook.com/iamgurdeeposahan">
                    <img className="md-user-image" alt="PORTIQO REAL ESTATE" title="PORTIQO REAL ESTATE" src="images/botPortiqo.png" />
                    <h1>PORTIQO </h1><small><br />
                    <Glyphicon glyph="briefcase"/>

                    REAL ESTATE</small></a>
                </div>
                <div className="popup-head-right pull-right">
                  <button className="chat-header-button" type="button"><i className="glyphicon glyphicon-facetime-video" /></button>
                  <button className="chat-header-button" type="button"><i className="glyphicon glyphicon-earphone" /></button>
                  <div className="btn-group gurdeepoushan">
                    <button className="chat-header-button" data-toggle="dropdown" type="button" aria-expanded="false">
                      <i className="glyphicon glyphicon-paperclip" /> </button>
                    <ul role="menu" className="dropdown-menu pull-right">
                      <li><a href="#">
                      <span className="glyphicon glyphicon-picture" aria-hidden="true" /> Gallery</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-camera" aria-hidden="true" /> Photo</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-facetime-video" aria-hidden="true" /> Video</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-headphones" aria-hidden="true" /> Audio</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-map-marker" aria-hidden="true" /> Location</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Contact</a></li>
                    </ul>
                  </div>
                  <button onClick={this.removeChatbot} data-widget="remove" id="removeClass" className="chat-header-button pull-right" type="button"><i className="glyphicon glyphicon-remove" /></button>
                </div>
              </div>
              <div id="chat" className="chat_box_wrapper chat_box_small chat_box_active" style={{opacity:   '1', display: 'block', transform: 'translatex(0px)'}}>
              <div className="chat_box touchscroll chat_box_colors_a">
              {
                  feed.map(entry =>
                  {
                      if(entry.sender == 'bot') {
                      return <div className="chat_message_wrapper">
                                  <div className="chat_user_avatar">
                                      <a href="https://web.facebook.com/iamgurdeeposahan" target="_blank">
                                          <img alt="PORTIQO REAL ESTATE" title="PORTIQO Agent" src="images/bot.jpeg" className="md-user-image" />
                                      </a>
                                  </div>
                                  <ul className="chat_message">
                                      <li>
                                        {entry.text}
                                      </li>
                                  </ul>
                              </div>
                      } else {
                      return <div className="chat_message_wrapper chat_message_right">
                                  <div className="chat_user_avatar">
                                      <a href="https://web.facebook.com/iamgurdeeposahan" target="_blank">
                                          <img alt="Gurdeep Osahan (Web Designer)" title="Gurdeep Osahan (Web Designer)" src="images/user.jpeg" className="md-user-image" />
                                      </a>
                                  </div>
                                  <ul className="chat_message">
                                      <li>
                                          {entry.text}
                                      </li>
                                  </ul>
                              </div>
                      }
                  }
                  )
              }
              </div>
              </div>
              <div className="chat_submit_box">
                <div className="uk-input-group">
                  <div className="gurdeep-chat-box" style={{display: 'inline-flex'}}>
                    <span style={{verticalalign:  'sub'}} className="uk-input-group-addon">
                      <a href="#"><i className="fa fa-smile-o" /></a>
                    </span>
                    <input type="text" onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null } placeholder="Type a message" id="submit_message" name="submit_message" className="md-input form-control" style={{width:'78%',marginTop:'-10px', marginRight:'9px', marginLeft:'4px'}} />
                    <span style={{verticalalign:  'sub'}} className="uk-input-group-addon">
                      <a href="#"><i className="fa fa-camera" /></a>
                    </span>
                  </div>
                  <span className="uk-input-group-addon">
                    <a href="#"><i className="glyphicon glyphicon-send" /></a>
                  </span>
                </div>
              </div>
            </aside>
            </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
        {
          isButton? <div>
          <p className="chatbot_text">May I help you?</p>
          <img src="images/chatbot.png" onClick={this.handleChatbot} className="chatbot_image" />
          {/* <button className="btn btn-primary" onClick={this.handleChatbot}>May I Help You</button> */}
          </div> : false
        }
        </React.Fragment>
      )}

      </div>

    );
  }
}

const mapStateToProps = (state) => {
    return {
      feed: state
    }
  }

 export default connect(mapStateToProps, {sendMessage})(ChatPage);
