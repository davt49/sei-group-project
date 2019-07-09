import React from 'react'
import axios from 'axios'
import Gem from './Gem'
import Auth from '../../lib/Auth'
import { Link } from  'react-router-dom'

class Gems extends React.Component {
  constructor() {
    super()

    this.state = { data: [], filterCategory: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  getData() {
    axios.get('/api/gems', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  handleChange(e) {
    const category = e.target.value
    this.setState({ filterCategory: category })
  }

  filterGems() {
    const regexp = new RegExp(this.state.filterCategory, 'i')
    return this.state.data.filter(gem => regexp.test(gem.category))
  }

  render() {
    console.log(this.state)
    return (
      <div className='container'>
        <h1>Gems</h1>
        {
          this.state.data &&
          <div>
            <div>
              <Link to="/gems/new">Post a gem</Link>
              <div className="form-group">
                <select className="form-select" name="category" onChange={this.handleChange}>
                  <option value="">Filter by category</option>
                  <option value="Markets">Markets</option>
                  <option value="Temples">Temples</option>
                  <option value="Beaches">Beaches</option>
                  <option value="Landscapes">Landscapes</option>
                </select>
              </div>
            </div>
            <div className='columns multiline is-mobile'>
              {
                this.filterGems().map(gem => {
                  return <Gem key={gem._id} {...gem}/>
                })
              }
            </div>
          </div>

        }

      </div>
    )
  }
}

export default Gems
