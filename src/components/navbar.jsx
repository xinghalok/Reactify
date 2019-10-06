import React, { Component } from "react";
import nav from "../assets/logo.png";

class Navbar extends Component {
  render() {
    const navstyle = {
      position: "relative",
      width: "100%",
      height: "auto",
      padding: "0.9%",
      boxShadow: "0 0 2px 2px rgba(0,0,0,0.1)"
    };

    const brand = {
      position: "relative",
      display: "block",
      left: "8.5vw"
    };

    const tabs = {
      position: "relative",
      width: "10%",
      float: "right",
      marginRight: "10%",
      display: "inline-block",
      textAlign: "center"
    };

    const tab = {
      marginLeft: "12%",
      marginRight: "12%",
      display: "inline-block"
    };

    return (
      <nav style={navstyle} className="navbar navbar-light navb">
        <span className="navbar-brand mb-0 h1">
          <span style={brand}>
            <img
              style={{ position: "relative", width: "22%", height: "17%" }}
              src={nav}
              alt=""
            />
          </span>
        </span>
        <div style={tabs}>
          <span style={tab}>
            <i
              style={{ fontSize: "1.6em", color: "rgba(99, 110, 114,1.0)" }}
              class="far fa-bell"
            ></i>
          </span>
          <span style={tab}>
            <i
              style={{ fontSize: "2em", color: "rgba(1, 163, 164,0.5)" }}
              class="fas fa-user-circle"
            ></i>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
