import React from 'react'
import Home from ".page/Home"
import './App.css'

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
  )
}

export default App;
