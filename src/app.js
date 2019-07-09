import React from 'react'
import ReactDOM from 'react-dom'
import 'spectre.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import GemNew from './components/gems/GemNew'
import ChatIndex from './components/chats/chatIndex'


const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path='/chats' component={ChatIndex}/>
          <Route path='/gems' component={GemNew}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login} />
        </Switch>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
