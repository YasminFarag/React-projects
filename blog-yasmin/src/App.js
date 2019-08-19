import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import CreateAPost from './components/CreateAPost';
import ShowCurrentPosts from './components/ShowCurrentPosts';


export default class App extends React.Component {
  
  render(){
  return (
    <Router>
    <section>
      <nav className="navigation">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to ="CreateAPost" className="link">Create A Post</Link></li>
        <li><Link to="ShowCurrentPosts" className="link">Show Current Posts</Link></li>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} /* text={this.state.text} */ />
        <Route path="/CreateAPost" component={CreateAPost} />
        <Route path="/ShowCurrentPosts" component= {ShowCurrentPosts} />

        </Switch>
      
    </section>
   
    </Router>
  )
}
}
