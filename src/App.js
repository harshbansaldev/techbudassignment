import React from "react";
import Weatherapi from "./components/Weatherapi";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import "./components/css/style1.css"
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/ToDoList";
import './App.css'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/reports' component={Weatherapi} />
        <Route path='/products' component={ToDoList} />
      </Switch>
    </Router>
  </>
  );
}
export default App;