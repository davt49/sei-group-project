import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (
      <section className="section">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">

            <label className="form-label" htmlFor="name">Username</label>
            <input
              className="form-input input-sm"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input input-sm"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-input input-sm"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <label className="form-label" htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              className="form-input input-sm"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              onChange={this.handleChange}
            />
            <label className="form-label" htmlFor="image">Image</label>
            <input
              className="form-input input-sm"
              name="image"
              placeholder="Image"
              onChange={this.handleChange}
            />

            <label className="form-label" htmlFor="Lang">Lang</label>
            <div className="form-group">
              <label className="form-radio form-inline">
                <input type="radio" name="lang" value="en" onChange={this.handleChange}/><i className="form-icon"></i> English
              </label>
              <label className="form-radio form-inline">
                <input type="radio" name="lang" value="vi" onChange={this.handleChange}/><i className="form-icon"></i> Vietnamese
              </label>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="text">Text</label>
              <textarea className="form-input" placeholder="Textarea" rows="4" name="text" onChange={this.handleChange}></textarea>
            </div>

            <label className="form-label" htmlFor="email">User Type</label>
            <div className="form-group">
              <label className="form-radio form-inline">
                <input type="radio" name="userType" value="tourist" onChange={this.handleChange}/><i className="form-icon"></i> Tourist
              </label>
              <label className="form-radio form-inline">
                <input type="radio" name="userType" value="local" onChange={this.handleChange}/><i className="form-icon"></i> Local
              </label>

            </div>
          </div>
          <button type="submit" className="btn btn-primary input-group-btn input-sm">Submit</button>
        </form>
      </section>
    )
  }
}

export default Register
