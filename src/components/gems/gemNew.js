import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class GemNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
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
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <label className="form-label" htmlFor="name">Image</label>
          <input
            className="form-input input-sm"
            name="image"
            placeholder="image url"
            onChange={this.handleChange}

          />
          <label className="form-label" htmlFor="caption">Caption</label>
          <input
            className="form-input input-sm"
            name="caption"
            placeholder="caption here"
            onChange={this.handleChange}
          />
          <label className="form-label" htmlFor="location">Location</label>
          <input
            className="form-input input-sm"
            name="location"
            placeholder="where is this?"
            onChange={this.handleChange}
          />

          <label className="form-label" htmlFor="category">Category</label>
          <div className="form-group">
            <select
              className="form-select"
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

          <button type="submit" className="btn btn-primary input-group-btn input-sm">Submit</button>
        </form>
      </div>
    )
  }
}

export default GemNew
