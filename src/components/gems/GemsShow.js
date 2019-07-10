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
    console.log('this is happening')
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

  render() {
    if (!this.state.gem) return null
    const { gem } = this.state
    // const { user } = this.state
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
                <p>{gem.user.username}</p>
                <hr />
                <h4 className="title is-4">Category</h4>
                <div className="chip">{gem.category}</div>
                <hr />
                <h4 className="title is-4">💎</h4>
                <p>{gem.likeCount}</p>
                <button onClick={this.addLike} >Like</button>
                <hr />
                {this.isOwner() && <Link
                  className="button"
                  to={`/gems/${this.props.match.params.gemId}/edit`}
                >
                  <button>Edit</button>
                </Link>}
                <hr />
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
