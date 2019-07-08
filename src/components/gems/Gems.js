import React from 'react'
import axios from 'axios'
import Gem from './Gem'
import Auth from '../../lib/Auth'

class Gems extends React.Component {
  constructor() {
    super()

    this.state = { data: [] }
  }

  getData() {
    axios.get('/api/gems', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    console.log(this.state.data)
    return (
      <div className='container'>
        <h1>Gems</h1>
        <button>Post a gem</button>
        <div className='columns multiline is-mobile'>
          <Gem />
          <Gem />
          <Gem />
          <Gem />
          <Gem />
          <Gem />
          <Gem />
        </div>
      </div>
    )
  }
}

export default Gems
