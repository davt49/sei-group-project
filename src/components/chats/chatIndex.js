import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class ChatIndex extends React.Component {
  constructor() {
    super()

    this.state = { chats: null }
  }

  getData() {
    axios.get('/api/chats', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <section>
        <div className="text-center">
          Search Topics
        </div>
        <div className="container">
          <div className="columns text-center">
            <div className="col-4">
            Accomodation
            </div>
            <div className="col-4">
            Public Transport
            </div>
            <div className="col-4">
            Activities
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ChatIndex
