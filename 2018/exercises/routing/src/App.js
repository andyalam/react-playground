import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/courses">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/users">
                    Users
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/courses" exact component={Courses} />
            <Route path="/courses/:id" exact component={Course} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
