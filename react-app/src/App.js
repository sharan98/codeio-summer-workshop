import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/departments">Departments</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        
        <Route path="/departments" component={Department} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}



function Department({ match }) {
  return (
    <div>
      <h2>Departments</h2>
      <ul>
        <li>
          <Link to={`${match.url}/csedept`}>CSE</Link>
        </li>
        <li>
          <Link to={`${match.url}/isedept`}>ISE</Link>
        </li>
        <li>
          <Link to={`${match.url}/ecedept`}>ECE</Link>
        </li>
      </ul>

      <Route path={`${match.path}/csedept`} component={CSE} />
      <Route path={`${match.path}/isedept`} component={ISE} />
      <Route path={`${match.path}/ecedept`} component={ECE} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a department.</h3>}
      />
    </div>
  );
}

function CSE({ match }) {
  return (
    <div>
      <h3>Welcome to CSE Department</h3>
      <ul>
        <li>
          <Link to={`${match.url}/coa`}>COA</Link>
        </li>
        <li>
          <Link to={`${match.url}/dbm`}>DBMS</Link>
        </li>
        <li>
          <Link to={`${match.url}/ada`}>ADA</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:course`} component={Course} />
    </div>
  );
}

function Course({ match }){
  return(
    <div> {match.params.course} </div>
  );
}

function ISE({ match }) {
  return (
    <div>
      <h3>Welcome to ISE Department</h3>
    </div>
  );
}

function ECE({ match }) {
  return (
    <div>
      <h3>Welcome to ECE Department</h3>
    </div>
  );
}

export default BasicExample;
