import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class GemsShow extends Component {
  constructor() {
    super()

    this.state = { gem: null, comment: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  handleChange(e) {
    this.setState({ comment: { text: e.target.value } })
  }

  getData() {
    axios.get(`/api/gems/${this.props.match.params.id}`)
      .then(res => this.setState({ gem: res.data, comment: {} }))
      .catch(err => console.log(err))
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/gems/${this.props.match.params.id}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  isOwner(comment) {
    return Auth.getPayload().sub === comment.user._id
  }

  handleCommentDelete(comment) {
    axios.delete(`/api/gems/${this.props.match.params.id}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.gem) return null
    const { gem } = this.state
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <Fragment>
            <h2 className="title">{gem.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={gem.image} alt={gem.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">Caption</h4>
                <p>{gem.caption}</p>
                <hr />
                <h4 className="title is-4">Location</h4>
                <p>{gem.location}</p>
                <hr />
                <h4 className="title is-4">User</h4>
                <p>{gem.user}</p> {/* user.username ????? */}
                <hr />
                <h4 className="title is-4">Category</h4> 
                <p>{gem.category}</p> {/* user.category ????? */}
                <hr />
              </div>
            </div>
            <hr />
            {gem.comments.map(comment => (
              <div key={comment._id} className="card">
                <div className="card-content">
                  {comment.text} - {new Date(comment.createdAt).toLocaleString()}
                </div>
                {this.isOwner(comment) && <button
                  className="button is-danger"
                  onClick={() => this.handleCommentDelete(comment)}
                >Delete
                </button>}
              </div>
            ))}
            <hr />
            {Auth.isAuthenticated() &&
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Comment........."
                    onChange={this.handleChange}
                    value={this.state.comment.text || ''}
                  >
                  </textarea>
                </div>
              </div>
              <button className="button" type="submit">Comment</button>
            </form>}
          </Fragment>
        </div>
      </section>
    )
  }

}


export default GemsShow