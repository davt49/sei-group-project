import React from 'react'
import ReactDOM from 'react-dom'
import 'spectre.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.scss'

// common components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

// user components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/auth/Profile'

// gems components
import GemsShow from './components/gems/GemsShow'
import GemNew from './components/gems/GemNew'
import Gems from './components/gems/Gems'

// chats components
import ChatIndex from './components/chats/ChatIndex'

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
          <Route path='/profile' component={Profile}/>
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
