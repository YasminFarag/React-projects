import React from 'react';
import './App.css';
import Home from './components/Home';
import Lifecycle from './components/Lifecycle';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Propstate from './components/Propstate';

function App() {
  return (
    <Router>
        <main>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/lifecycle">Lifecycle</Link></li>
                <li><Link to="/Prostate">Prostate</Link></li>
               
          </nav>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Lifecycle" component={Lifecycle} />
          <Route Path="/Propstate" component={Propstate} />
          <Route  component={PageNotFound} />
         
         </Switch>
        </main>
    </Router>
  );
}

export default App;
