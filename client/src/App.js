import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch'
import './App.css';

function App() {  
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron fluid>
          <h1>(React) Google Books Search</h1>
          <h3>Search for and Save Books of Interest</h3>  
        </Jumbotron>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/search' component={Home}/>
          <Route exact path='/saved' component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    
  );

}

export default App;
