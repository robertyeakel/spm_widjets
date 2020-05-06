/* Import statements */
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import Report from "./views/report/Report";

/* Home component */
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default function App() {
  return (
    <div>
      <nav>
        <div className="d-sm-flex">
          <div className="mr-3">
            <Link to="/">Home</Link>
          </div>
          <div className="mr-3">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="mr-3">
            <Link to="/report">Report</Link>
          </div>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/report" component={Report} />
    </div>
  );
}
