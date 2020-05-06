import React, { Component } from "react";
import "./Dashboard.css";

const is_local = false;
if (is_local) {
  const domain = "http://localhost";
} else {
  const domain = "https://api.strikepointmedia.com";
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    debugger;
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {/* <SomeComponent /> */}
      </div>
    );
  }
}
