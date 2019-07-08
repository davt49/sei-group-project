import React from 'react'
import ReactDOM from 'react-dom'
import 'spectre.css'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Register/>
        <Login />
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
