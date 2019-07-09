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
      .then(res => {
        const newArray = res.data.filter(gem => gem.user._id === this.state.user._id)
        return this.setState({ gems: newArray })
      })
      .catch(err => console.log(err))

  }

  componentDidMount() {
    this.getUserData()
    this.getUserGems()
  }

  render() {
    return (
      <div>
        {
          this.state.user &&
          <div>
            <div className="columns col-oneline">
              <div className="column col-5">
                <img src={this.state.user.image} className="s-circle"/>
              </div>
              <div className="column col-7">
                <h2>{this.state.user.username}</h2>
                <h3>
                  {this.state.user.userType === 'Tourist' ? <span>✈️ </span> : <span>🇻🇳 </span> }
                  {this.state.user.userType}
                </h3>
                <p>{this.state.user.text}</p>
                {
                  this.state.gems.length > 0 &&
                  <p>
                    <span>{this.state.gems.length} </span>
                    {
                      this.state.gems.length > 1 ? 'Gems' : 'Gem'
                    }
                  </p>
                }
              </div>
            </div>
            <div>
              <hr />
              <div className="columns col-oneline">
                <div className="column col-5">
                  <Link to="/gems">Find new gems</Link>
                </div>
                <div className="divider text-center col-2" data-content="OR"></div>
                <div className="column col-5">
                  <Link to="/chats">Find new friends</Link>
                </div>
              </div>
            </div>
            <div>
              {
                this.state.gems.map(gem => {
                  return <img src={gem.image} key={gem._id}/>
                })
              }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Profile
