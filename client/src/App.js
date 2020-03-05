import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Saved from './pages/Saved';
import './App.css';

function App() {  
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/search' component={Home}/>
        </Switch>
      </div>
    </Router>
    
  );

}

export default App;
