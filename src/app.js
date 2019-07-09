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
import Gems from './components/gems/Gems'
import ChatIndex from './components/chats/ChatIndex'
import GemsShow from './components/gems/GemsShow'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path='/chats' component={ChatIndex}/>
          <Route path='/gems/:gemId' component={GemsShow}/>
          <Route path='/gems/new' component={GemNew}/>
          <Route path='/gems' component={Gems}/>
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
