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
        <div classNames="form-group">
          <label className="form-label" htmlFor="name">Name</label>
          <input className="form-input" type="text" id="name" placeholder="Name"/>
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-input" type="text" id="email" placeholder="Email"/>
          <button className="btn btn-primary input-group-btn">Submit</button>
        </div>
      </section>
    )
  }
}

export default Login


//<div className="container">
//   <form onSubmit={this.handleSubmit}>
//     <h2 className="title">Login</h2>
//     <div className="field">
//       <label className="label">Email</label>
//       <div className="control">
//         <input
//           className={`input ${this.state.error ? 'btn btn-error' : ''} `}
//           name="email"
//           placeholder="Email"
//           onChange={this.handleChange}
//         />
//       </div>
//     </div>
//     <div className="field">
//       <label className="label">Password</label>
//       <div className="control">
//         <input
//           className={`input ${this.state.error ? 'btn btn-error' : ''} `}
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={this.handleChange}
//         />
//       </div>
//     </div>
//     <button type="submit" className="btn btn-success">Login</button>
//   </form>
// </div>
