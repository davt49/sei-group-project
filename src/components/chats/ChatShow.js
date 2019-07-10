import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class ChatsShow extends React.Component {
  constructor() {
    super()

    this.state = {
      chat: {},
      comments: [],
      user: {}
    }

  }

  getData() {
    axios.get(`/api/chats/${this.props.match.params.chatId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ chat: res.data, comments: res.data.comments }))
      .catch(err => console.log(err))
  }

  getUserData() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getData()
    this.getUserData()
  }

  render() {

    console.log(this.state.comments)

    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{this.state.chat.title}</h2>
        </div>
        <div className="container">
          {this.state.comments.map(comment => (
            <div key={comment._id} className="">
              <div className="">
                <figure className="avatar">
                  <img src={comment.user === this.state.user._id ? this.state.user.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9PFPY3b8MD5KvElLffNqx4DID2PlNM12byePMjKaKzDAe6XafA' }/>
                </figure>
                <p>{comment.text} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default ChatsShow
