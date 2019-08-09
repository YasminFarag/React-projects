import React from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList.jsx';
import ToDoForm from './components/ToDoForm.jsx';

function App() {
  return (
    <div>
     
     <Header /* tagline="this is a semantic tag" */ />
     <ToDoForm />
     <ToDoList />
     
    </div>
  );
}

export default App;
