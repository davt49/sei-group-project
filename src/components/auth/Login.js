import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, error: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        // Auth.setToken(res.data.token)
        this.props.history.push('/gems')
      })
      .catch(() => this.setState({ error: 'Invalid Crendentials' }))
  }

  render(){
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Login</h2>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Email</label>
              <div className="control">
                <input
                  className="form-input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Password</label>
              <input className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary input-group-btn">Login</button>
            <p> Dont have an account?
            Register here </p>
          </form>
        </div>
      </section>
    )
  }
}

export default Login
