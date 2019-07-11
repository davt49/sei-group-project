import React from 'react'
import axios from 'axios'
import Gem from './Gem'
import Auth from '../../lib/Auth'
import { Link } from  'react-router-dom'

class Gems extends React.Component {
  constructor() {
    super()

    this.state = { data: null, filterCategory: '', checked: null }
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

  handleChange(e, n) {
    const category = e.target.value
    this.setState({ filterCategory: category, checked: n })
  }

  filterGems() {
    const regexp = new RegExp(this.state.filterCategory, 'i')
    return this.state.data.filter(gem => regexp.test(gem.category))
  }

  render() {
    return (
      <div className='container'>
        <h1>Hidden Gems</h1>
        <blockquote className="text-center">
          <p>Watch with glittering eyes the whole world around you.</p>
          <cite>- Roald Dahl</cite>
        </blockquote>
        {
          !this.state.data &&
          <img src='https://media2.giphy.com/media/mFHVvtrf1n3qm3pdvr/giphy.gif?cid=790b76115d25fc155230413373f1d5d2&rid=giphy.gif' />
        }
        {
          this.state.data &&
          <div>
            <div>
              <Link to="/gems/new">💎 Post Your Gem</Link>
              <div className="filter">
                <input
                  type="radio"
                  id="tag-0"
                  className="filter-tag"
                  name="category"
                  value=""
                  onChange={(e) => {
                    this.handleChange(e, 0)
                  }
                  }
                  hidden/>
                <input
                  type="radio"
                  id="tag-1"
                  className="filter-tag"
                  name="category"
                  value="Markets"
                  onChange={(e) => {
                    this.handleChange(e, 1)
                  }
                  }
                  hidden />
                <input
                  type="radio"
                  id="tag-2"
                  className="filter-tag"
                  name="category"
                  value="Temples"
                  onChange={(e) => {
                    this.handleChange(e, 2)
                  }
                  }
                  hidden />
                <input
                  type="radio"
                  id="tag-3"
                  className="filter-tag"
                  name="category"
                  value="Beaches"
                  onChange={(e) => {
                    this.handleChange(e, 3)
                  }
                  }
                  hidden />
                <input
                  type="radio"
                  id="tag-4"
                  className="filter-tag"
                  name="category"
                  value="Landscapes"
                  onChange={(e) => {
                    this.handleChange(e, 4)
                  }
                  }
                  hidden
                />
                <div className="filter-nav">
                  <label
                    className={`chip ${this.state.checked === 0 ? 'bg-success' : ''}`}
                    htmlFor="tag-0">
                    All
                  </label>
                  <label
                    className={`chip ${this.state.checked === 1 ? 'bg-success' : ''}`}
                    htmlFor="tag-1">
                    Markets
                  </label>
                  <label
                    className={`chip ${this.state.checked === 2 ? 'bg-success' : ''}`}
                    htmlFor="tag-2">
                    Temples
                  </label>
                  <label
                    className={`chip ${this.state.checked === 3 ? 'bg-success' : ''}`}
                    htmlFor="tag-3">
                    Beaches
                  </label>
                  <label
                    className={`chip ${this.state.checked === 4 ? 'bg-success' : ''}`}
                    htmlFor="tag-4">
                    Landscapes
                  </label>
                </div>
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
