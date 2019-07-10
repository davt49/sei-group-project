import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class ChatsShow extends React.Component {
  constructor() {
    super()

    this.state = { chat: {} }
  }

  getData() {
    axios.get(`/api/chats/${this.props.match.params.chatId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ chat: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getData()
  }

  render() {

    return (
      <section className="section">
        {
          this.state.chat.comments &&
          <div>
            <div className="panel">
              <div className="panel-header">
                <h2 className="panel-title">{this.state.chat.title}</h2>
                <p className="title">Chat with fellow {this.state.chat.title} about accomodation, transport, hidden gems and so on!</p>
              </div>
              <div className="panel-body">
                {this.state.chat.comments.map(comment => {
                  return <div key={comment._id} className="tile">
                    <div className="tile-icon">
                      <figure className="avatar"><img src={comment.user.image} alt="Avatar"/></figure>
                    </div>
                    <div className="tile-content">
                      <p className="tile-title text-bold">{comment.user.username}</p>
                      <p className="tile-subtitle">{comment.text}</p>
                      <small>{new Date(comment.createdAt).toLocaleString().slice(0,17)}</small>
                    </div>
                  </div>
                })
                }
                <div className="panel-footer">
                  <form onSubmit={this.handleSubmit} className="input-group">
                    <input className="form-input" type="text" placeholder="Type your message" />
                    <button type='submit' className="btn btn-primary input-group-btn">Send</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        }
      </section>

    )
  }
}

export default ChatsShow
