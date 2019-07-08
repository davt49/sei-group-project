import React from 'react'


class Navbar extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  render() {
    return (
      <header className="navbar">
        <section className="navbar-section columns">
          <a href="..." className="btn btn-success col-4 text-large">Home</a>
          <a href="..." className="btn btn-success col-4 text-large">Gems</a>
          <a href="..." className="btn btn-success col-4 text-large">Chats</a>
        </section>

      </header>
    )
  }

}

export default Navbar
