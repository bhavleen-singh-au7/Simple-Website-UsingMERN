import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from './Button';

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: "#FFF", fontWeight: "bold"
    };
  } else {
    return { color: "#d1d1d1" };
  }
};

function Navbar({ history }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand logo" href="/">Assignment</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link style={currentTab(history, "/signup")} className="nav-link" to="/signup">SignUp</Link>
          </li>

          <li className="nav-item">
            <Link style={currentTab(history, "/signin")} className="nav-link" to="/signin">SignIn</Link>
          </li>

          <li className="nav-item">
            <Link style={currentTab(history, "/dashboard")} className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <Button className="btn btn-danger my-2" btnName="Sign Out" />
    </nav>
  );
}

export default withRouter(Navbar);