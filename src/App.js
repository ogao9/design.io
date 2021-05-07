import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import About from './components/About'
import ArtDisplay from './components/ArtDisplay'
import Admin from './components/Admin'


function App() {
  return (
    <Router>
      <div className="container">
        <Header/>

        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/About" exact component={About} />
            <Route path="/ArtDisplay" exact component={ArtDisplay}/>
            <Route path="/Admin" exact component={Admin}/>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;






