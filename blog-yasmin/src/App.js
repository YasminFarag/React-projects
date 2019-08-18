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
      <p>hello</p>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="CreateAPost">Create A Post</Link></li>
        <li><Link to="ShowCurrentPosts">Show Current Posts</Link></li>
      </nav>
      <Switch>
        <Route exact path="/" components={Home} />
        <Route path="CreateAPost" components={CreateAPost} />
        <ShowCurrentPosts path="ShowCurrentPosts" components= {ShowCurrentPosts} />
        </Switch>
      
    </section>
    </Router>
  )
}
