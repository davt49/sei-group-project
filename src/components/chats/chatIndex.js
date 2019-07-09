import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class ChatIndex extends React.Component {
  constructor() {
    super()

    this.state = { chats: null }
  }

  getData() {
    axios.get('/api/chats', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ chats: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    console.log(this.state.chats)
    return (
      <section>
        <div className="text-center">
          Search Topics
        </div>
        <div className="container">
          <div className="columns text-center">
            {
              this.state.chats &&
              this.state.chats.map(chat => (
                <div className="col-6" key={chat._id}>
                  <Link to={`chats/${chat.title}`}>
                    <div className="card cardstyle">
                      <div className="card-image">
                        <img src={chat.image} alt={chat.title} className="imagestyle"/>
                      </div>
                      <div className="card-body">
                        {chat.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
}

export default ChatIndex
