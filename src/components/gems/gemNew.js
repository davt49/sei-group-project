import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class GemNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/gems', this.state.data,{
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/gems'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (

      <div>
        <p>If you have a favourite #hiddengem that you think deserves a bit more recognition (and you do not mind sharing it with more people), post it.</p>
        <form onSubmit={this.handleSubmit} className="form-autocomplete">
          <label className="form-label" htmlFor="name">Image</label>
          <input
            className={`form-input input-sm ${this.state.errors ? 'is-error' : ''} `}
            name="image"
            placeholder="image url"
            onChange={this.handleChange}
          />
          {this.state.errors && <small className="help is-danger">{this.state.errors.image}</small>}
          <label className="form-label" htmlFor="caption">Caption</label>
          <input
            className={`form-input input-sm ${this.state.errors ? 'is-error' : ''} `}
            name="caption"
            placeholder="caption here"
            onChange={this.handleChange}
          />
          {this.state.errors && <small className="help is-danger">{this.state.errors.caption}</small>}
          <label className="form-label" htmlFor="location">Location</label>
          <input
            className={`form-input input-sm ${this.state.errors ? 'is-error' : ''} `}
            name="location"
            placeholder="where is this?"
            onChange={this.handleChange}
          />
          {this.state.errors && <small className="help is-danger">{this.state.errors.location}</small>}

          <label className="form-label" htmlFor="category">Category</label>
          <div className="form-group">
            <select
              className={`form-select ${this.state.errors ? 'is-error' : ''} `}
              name="category"
              onChange={this.handleChange}
            >
              <option>Choose an option</option>
              <option>Markets</option>
              <option>Temples</option>
              <option>Beaches</option>
              <option>Landscapes</option>
              <option>Others</option>
            </select>
          </div>
          {this.state.errors && <small className="help is-danger">{this.state.errors.category}</small>}
          <br />
          <button type="submit" className="btn btn-primary input-group-btn input-sm">Submit</button>
        </form>
      </div>
    )
  }
}

export default GemNew
