// import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import Employees from './pages/Employees'
import Companies from './pages/Companies'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {

  return (
    <Router>
      <header>
        <h1>Welcome to my Employee Directory SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/Companies">Companies</Link>
            </li>
            <li>
              <Link to="/Employees">Employees</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Employees" component={Employees}></Route>
        <Route exact path="/Companies" component={Companies}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
