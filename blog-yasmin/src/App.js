import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import CreateAPost from './components/CreateAPost';
import ShowCurrentPosts from './components/ShowCurrentPosts';


export default function App() {
  return (
    <Router>
    <section>
      <nav className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to ="CreateAPost">Create A Post</Link></li>
        <li><Link to="ShowCurrentPosts">Show Current Posts</Link></li>
      </nav>
      
      
    </section>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="./CreateAPost" component={CreateAPost} />
        <Route path="./ShowCurrentPosts" component= {ShowCurrentPosts} />
        </Switch>
    </Router>
  )
}
