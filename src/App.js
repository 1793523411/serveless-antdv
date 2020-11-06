import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter  as Router, Route } from "react-router-dom";

import AdminIndex from './components/AdminIndex/index'

function App() {
  return (
    <Router>
    <div>
      <Route path="/" component={AdminIndex} />
    </div>


  </Router>
  );
}

export default App;
