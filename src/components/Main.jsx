import React, { Component } from "react";
import Grid from "./grid.jsx";

class Main extends Component {
  render() {
    const AppInner = {
      position: "relative",
      paddingTop: "4.5%"
    };

    const exbtn = {
      fontSize: "0.8em",
      padding: "0.7%",
      paddingLeft: "2.5%",
      paddingRight: "2.5%",
      fontWeight: "410",
      letterSpacing: "0.2px",
      backgroundColor: "rgba(220, 221, 225,0.1)",
      cursor: "default",
      color: "rgba(1, 163, 164,1.0)",
      border: "1px solid rgba(1, 163, 164,1.0)"
    };

    const inform = {
      position: "relative",
      display: "block",
      backgroundColor: "rgba(220, 221, 225,0.1)",
      marginTop: "8vh",
      padding: "1.6%",
      paddingLeft: "2%",
      paddingRight: "2%"
    };

    return (
      <section style={AppInner} className="container">
        <span style={{ fontWeight: "400", fontSize: "2.3em" }}>
          Content Store
        </span>
        <div style={inform} className="information container-fluid">
          <span
            style={{
              fontSize: "1.1em",
              color: "rgba(1, 163, 164,1.0)",
              letterSpacing: "0.5px",
              fontWeight: "400"
            }}
          >
            Got bulk orders or almost similar orders ? Fill the order brief in
            an excel sheet
          </span>
          <br />
          <p
            style={{
              fontSize: "0.9em",
              color: "rgba(131, 149, 167,1.0)",
              fontWeight: "400",
              paddingTop: "1.5%"
            }}
          >
            If you're wondering about an easy way to place orders in large
            numbers we provide a way customized for that.
            <br />
            Download our excel sheet, and fill the order brief in prescribed
            format and submit. In case you need any help,
            <span style={{ textDecoration: "underline" }}>
              we <br /> are just a click away to assist you in placeing your
              order
            </span>
          </p>

          <button style={exbtn} type="button" class="btn">
            Order via Excel Sheet
          </button>
        </div>

        <Grid />
      </section>
    );
  }
}

export default Main;
