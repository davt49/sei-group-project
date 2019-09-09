import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => (
  <section className="container">
    <h1>Oops, something went wrong!</h1>
    <Link to="/" className="c-hand">Go back to homepage</Link>
  </section>
)

export default Error