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
        <div className="container-fluid h-100">
        <div className="row justify-content-center h-100">

          <div className="col-md-8 col-xl-6 chat">
            <div className="card" style={{width:'69%'}}>
              <div className="card-header msg_head" style={{width :'100%', height:'90px'}}>
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/botPortiqo.png" className="rounded-circle user_img" />
                    <span className="online_icon" /><br />
                    <span style={{color:'white'}}>Active</span>
                  </div>
                  <div className="user_info">
                    <span>PORTIQO</span>
                    <p style={{display:'inline-block'}}>real estate bussiness</p>
                  </div>
                  <div className="video_cam">

                    <span><i className="glyphicon glyphicon-facetime-video" /></span>
                    <span className="glyphicon glyphicon-earphone" aria-hidden="true" />
                    <button onClick={this.removeChatbot} data-widget="remove" id="removeClass" className="chat-header-button remove_icon" type="button"><i className="glyphicon glyphicon-remove-circle" /></button>
                  </div>
                </div>
                <span className="glyphicon glyphicon-option-vertical" aria-hidden="true" />
                <div className="action_menu">
                  <ul>
                    <li><i className="fas fa-user-circle" /> View profile</li>
                    <li><i className="fas fa-users" /> Add to close friends</li>
                    <li><i className="fas fa-plus" /> Add to group</li>
                    <li><i className="fas fa-ban" /> Block</li>
                  </ul>
                </div>
              </div>
              <div className="card-body msg_card_body" style={{width:'100%'}}>
              {
                  feed.map(entry =>
                  {
                      if(entry.sender == 'bot') {
                      return  <div className="d-flex justify-content-start mb-4">
                          <div className="img_cont_msg">
                            <img src="images/bot.jpeg" className="rounded-circle user_img_msg" />
                          </div>
                          <div className="msg_cotainer">
                              {entry.text}
                          </div>
                          <span className="msg_time">9:12 AM, Today</span>
                      </div>

                      } else {
                      return <div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send">
                        {entry.text}
                          <span className="msg_time_send" style={{display:'inline'}}>9:05 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src="images/user.jpeg" className="rounded-circle user_img_msg" />
                        </div>
                      </div>
                      }
                  }
                  )
              }

              </div>
              <div className="card-footer">
                <div className="input-group">
                  <div className="input-group-append">
                    <span className="input-group-text attach_btn"><i className="fas fa-paperclip" /></span>
                  </div>

                  <input  onKeyDown={(e) => e.keyCode === 13 ? sendMessage(e.target.value) : null } className="form-control type_msg" placeholder="Type your message..." defaultValue={""} />
                  <div className="input-group-append">
                    <span className="input-group-text send_btn"><i className="fas fa-location-arrow" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
