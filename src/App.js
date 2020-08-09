import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Home from './home'
import AddWords from './pages/AddWords'
import SearchWord from './pages/SearchWord'
import SaveWords from './components/saveWords'
// import Notfoundpage from './pages/notfoundpage'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Nunito Sans:300,400,600', 'sans-serif']
  }
});

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div className = "App">
          {/* <Navbar bg = "dark" /> */}
          <div id = "page-body" >
            <Switch>
              <Route path = "/" component = {Home} exact />
              <Route path = "/addWords" component = {AddWords} exact/>
              {/* <Route path = "/addWords/save" component = {Home} exact/> */}
              <Route path = "/searchWord" component = {SearchWord} exact/>
              {/* <Route component = {Notfoundpage} /> */}
            </Switch>
          </div>
        </div>
      </Router>
      </>
    )
  }
}

export default App
