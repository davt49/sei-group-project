import React, { Fragment } from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import { Link } from  'react-router-dom'

class GemsShow extends React.Component {
  constructor() {
    super()

    this.state = { gem: null , comment: {}, user: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.addLike = this.addLike.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  addLike() {
    axios.get(`/api/gems/${this.props.match.params.gemId}/likes`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(this.getData())
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ comment: { text: e.target.value } })
  }

  getData() {
    axios.get(`/api/gems/${this.props.match.params.gemId}`, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(res => this.setState({ gem: res.data, comment: {} }))
      .then(console.log(this.state))
      .catch(err => console.log(err))
  }


  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/gems/${this.props.match.params.gemId}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  isOwnerComment(comment) {
    return Auth.getPayload().sub === comment.user._id
  }
  isOwner() {
    return Auth.getPayload().sub === this.state.gem.user._id
  }

  handleCommentDelete(comment) {
    axios.delete(`/api/gems/${this.props.match.params.gemId}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  handleDelete() {
    axios.delete(`/api/gems/${this.props.match.params.gemId}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.props.history.push('/gems'))
      .catch(err => console.log(err.response))
  }

  render() {
    console.log(this.props.match.params.gemId)
    if (!this.state.gem) return null
    const { gem } = this.state
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
                <h4 className="title is-4">Caption {this.isOwner() && <Link
                  className="btn btn-link btn-sm"
                  to={`/gems/${this.props.match.params.gemId}/edit`}
                >
                  ✏️
                </Link>}
                </h4>
                <div className="columns">
                  <h4 className="title is-4 col-2"> 💎 </h4>
                  <p className="title is-4 col-2">{gem.likeCount}</p>
                  <button className="btn btn-primary btn-sm col-2" onClick={this.addLike} >Like</button>
                </div>

                <p>{gem.caption}</p>
                <hr />
                <h4 className="title is-4">Location</h4>
                <p>{gem.location}</p>
                <hr />
                <h4 className="title is-4">User</h4>
                <p>{gem.user.username}</p>
                <hr />
                <h4 className="title is-4">Category</h4>
                <div className="chip">{gem.category}</div>
                <hr />

                <hr/>
                {this.isOwner() && <button onClick={this.handleDelete} className="btn btn-primary btn-sm btn-error">Delete ❌</button>}
              </div>
            </div>
            <hr />
            {gem.comments.map(comment => (
              <div key={comment._id} className="card">
                <div className="card-content">
                  {comment.text}
                </div>
                <div>
                  {comment.user.username} - {new Date(comment.createdAt).toLocaleString()}
                </div>
                {this.isOwnerComment(comment) && <button
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
