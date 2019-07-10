import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class GemEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/gems/${this.props.match.params.gemId}`, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/gems/${this.props.match.params.gemId}`, this.state.data, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/gems'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-autocomplete">
          <label className="form-label" htmlFor="name">Image</label>
          <input
            className={`form-input input-sm ${this.state.errors ? 'is-error' : ''} `}
            name="image"
            value = {this.state.data.image || ''}
            placeholder="image url"
            onChange={this.handleChange}
          />
          {this.state.errors && <small className="help is-danger">{this.state.errors.image}</small>}
          <label className="form-label" htmlFor="caption">Caption</label>
          <input
            className={`form-input input-sm ${this.state.errors ? 'is-error' : ''} `}
            name="caption"
            value = {this.state.data.caption || ''}
            placeholder="caption here"
            onChange={this.handleChange}
          />
          {this.state.errors && <small className="help is-danger">{this.state.errors.caption}</small>}
          <label className="form-label" htmlFor="location">Location</label>
          <input
            className={`form-input input-sm ${this.state.errors ? 'is-error' : ''} `}
            name="location"
            value = {this.state.data.location || ''}
            placeholder="where is this?"
            onChange={this.handleChange}
          />
          {this.state.errors && <small className="help is-danger">{this.state.errors.location}</small>}

          <label className="form-label" htmlFor="category">Category</label>
          <div className="form-group">
            <select
              className={`form-select ${this.state.errors ? 'is-error' : ''} `}
              name="category"
              value = {this.state.data.category || ''}
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

export default GemEdit
