import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Auth extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li><Link to="/router-param-example-link">Router Param Example Link</Link></li>
            <li><Link to="/test">Test</Link></li>
          <li><a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcalendar&response_type=token&prompt=consent&client_id=127111398025-hn20jreib1o4ndbmm7ttra6vihq6foj9.apps.googleusercontent.com">API END Point</a>
            <Route path="/:id" component={API}/></li>
          </ul>
        </div>
      </Router>
    );
  }
}

const API = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
    {
      (match.params.id === "calendar") ?(
        <div>
          Type in url the following: <strong>https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=(access_token)</strong> <br/><br/>
          <em>Where (access_token) is what comes after &access_token= (and before &token_type=) in your current URL</em>
        </div>
      ) : (
        null
      )
    }
  </div>
)

export default googleApiOauth;
