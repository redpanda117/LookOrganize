import React from "react";
import "./Nav.css";

export const Nav = (props) =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Look Organize
        </a>
      </div>
      
      {props.userInfo ?
      <ul className="nav navbar-nav navbar-right">
        <li><div className="navbar-text">{props.userInfo}</div></li>
        <li><a className="btn btn-primary" href="/logout">Logout</a></li>
      </ul>
      :
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/SignUp"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
    }
    
    </div>
  </nav>;


