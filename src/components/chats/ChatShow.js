import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class ChatsShow extends React.Component {
  constructor() {
    super()

    this.state = { chat: {}, name: '', value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ name, value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const comment = { [this.state.name]: this.state.value }
    axios.post(`/api/chats/${this.props.match.params.chatId}/comments`, comment, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .then(() => this.setState({ name: '', value: '' }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="section">
        {
          !this.state.chat.comments &&
            <img src='https://media2.giphy.com/media/mFHVvtrf1n3qm3pdvr/giphy.gif?cid=790b76115d25fc155230413373f1d5d2&rid=giphy.gif' />
        }
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
                      <Link to={`/users/${comment.user._id}`}>
                        <figure className="avatar"><img src={comment.user.image} alt="Avatar"/></figure>
                      </Link>
                    </div>
                    <div className="tile-content">
                      <p className="tile-title text-bold">
                        {comment.user.username}
                        <span>{comment.user.userType === 'Local' ? ' 🇻🇳 ' : ' ✈️ '}</span>
                      </p>
                      <p className="tile-subtitle">{comment.text}</p>
                      <small>{new Date(comment.createdAt).toLocaleString().slice(0,17)}</small>
                    </div>
                  </div>
                })
                }
                <div className="panel-footer">
                  <form onSubmit={this.handleSubmit} className="input-group">
                    <input
                      className="form-input"
                      name="text"
                      placeholder="Type your message"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
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
