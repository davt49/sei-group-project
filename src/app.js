import React from 'react'
import ReactDOM from 'react-dom'
import 'spectre.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'

import GemNew from './components/gems/GemNew'
import GemsShow from './components/gems/GemsShow'
import Gems from './components/gems/Gems'
import GemEdit from './components/gems/GemEdit'

import ChatIndex from './components/chats/ChatIndex'
import ChatShow from './components/chats/ChatShow'


const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path='/chats/:chatId' component={ChatShow}/>
          <Route path='/chats' component={ChatIndex}/>
          <Route path='/gems/:gemId/edit' component={GemEdit}/>
          <Route path='/gems/:gemId' component={GemsShow}/>
          <Route path='/gems/new' component={GemNew}/>
          <Route path='/gems' component={Gems}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/register' component={Register}/>
          <Route exact path='/' component={Login} />
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
