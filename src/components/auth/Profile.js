import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  constructor() {
    super()

    this.state = { user: {}, gems: [] }
  }

  getUserData() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  getUserGems() {
    axios.get('/api/gems', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }

  componentDidMount() {
    this.getUserData()
    this.getUserGems()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="columns col-oneline">
          <div className="column col-5">
            <img src={this.state.user.image} />
          </div>
          <div className="column col-7">
            <h2>{this.state.user.username}</h2>
            <h3>
              {this.state.user.userType === 'Tourist' ? <span>✈️ </span> : <span>🇻🇳 </span> }
              {this.state.user.userType}
            </h3>
            <p>{this.state.user.text}</p>
            <p>Gems</p>
          </div>
        </div>
        <div>
          <hr />
          <div className="columns col-oneline">
            <div className="column col-6">
              <button>Find new gems</button>
            </div>
            <div className="column col-6">
              <button>Find new friends</button>
            </div>
          </div>
        </div>
        <div>gems</div>
      </div>
    )
  }
}

export default Profile
