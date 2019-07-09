import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class ChatsShow extends React.Component {
  constructor() {
    super()

    this.state = {
      chats: {}
    }

  }

  getData() {
    axios.get(`/api/chats/${this.props.match.params._id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log(res))
      // .then(res => this.setState({ chats: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getData()
  }

  render() {
    console.log(this.state)
    return (
      <p>Hi</p>
    )
  }
}

export default ChatsShow

// <section className="section">
//   <div className="container">
//     <h2 className="title">{this.state.chats.title}</h2>
//   </div>
//
//   <div className="container">
//     {this.state.chats.comments.map(comment => (
//       <div key={comment._id} className="commentShow">
//         <div className="comment-content">
//           <p>{comment.text}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>
