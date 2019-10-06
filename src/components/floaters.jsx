import React, { Component } from "react";

class Floaticon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icode: this.props.ic
    };
  }

  render() {
    const sicons = {
      position: "relative",
      display: "block",
      margin: "auto",
      top: "4%",
      marginTop: "40%",
      paddingTop: "25%",
      paddingBottom: "25%",
      borderRight: "2px solid rgba(1, 163, 164,1.0)",
      color: "rgba(99, 110, 114,1.0)"
    };

    return (
      <span style={sicons}>
        <i style={{ fontSize: "1.3em" }} class={this.state.icode}></i>
      </span>
    );
  }
}

class Floaters extends Component {
  state = {};
  render() {
    const sbar = {
      position: "absolute",
      backgroundColor: "white",
      float: "left",
      width: "4%",
      zIndex: "2",
      height: "100%",
      textAlign: "center",
      boxShadow: "0 0 2px 2px rgba(0,0,0,0.1)"
    };
    return (
      <div style={sbar}>
        <Floaticon ic="fas fa-store" />
        <Floaticon ic="fas fa-cubes" />
        <Floaticon ic="fas fa-search" />
      </div>
    );
  }
}

export default Floaters;
