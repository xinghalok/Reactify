import React, { Component } from "react";
import Card from "./card";

class Grid extends Component {
  render() {
    const cardRow = {
      position: "relative",
      marginBottom: "6%"
    };
    return (
      <div style={cardRow} className="row">
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
        <Card main="News / Letter" sub="from Rs. 1000" />
      </div>
    );
  }
}

export default Grid;
