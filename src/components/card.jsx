import React, { Component } from "react";
import Dp from "../assets/dp.jpeg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: Dp,
      main: this.props.main,
      sub: this.props.sub,
      Content:
        "Lorem ipsum dolor sit amet, elit. Mauris orci, eget congue gravida. Sed fermentum sitex finibus."
    };
  }

  render() {
    const exbtn = {
      fontSize: "1em",
      padding: "2%",
      paddingLeft: "18%",
      paddingRight: "18%",
      marginTop: "1%",
      fontWeight: "410",
      letterSpacing: "0.2px",
      backgroundColor: "white",
      cursor: "default",
      color: "rgba(1, 163, 164,0.5)",
      border: "2px solid rgba(1, 163, 164,0.5)"
    };

    const profile = {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: "50%"
    };

    const gridcard = {
      position: "relative",
      marginTop: "6%"
    };

    const cardInner = {
      position: "relative",
      display: "block",
      paddingTop: "6%",
      paddingBottom: "6%",
      //boxShadow: "0 0 20px 4px rgba(0,0,0,0.1)",
      backgroundColor: "white",
      borderRadius: "3px"
    };

    const cardTag = {
      position: "absolute",
      marginTop: "4%",
      fontWeight: "420"
    };

    return (
      <div
        style={gridcard}
        className="gridcard col-4 col-sm-4 col-md-4 col-xl-4"
      >
        <div style={cardInner}>
          <div className="row" style={{ position: "relative", margin: "8%" }}>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <img style={profile} src={this.state.image} alt="" />
            </div>
            <div
              style={{ position: "relative" }}
              className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
            >
              <span style={cardTag}>
                {this.state.main}
                <br />
                <span style={{ fontSize: "0.9em", fontWeight: "380" }}>
                  {this.state.sub}
                </span>
              </span>
            </div>
          </div>

          <div className="row" style={{ position: "relative", margin: "8%" }}>
            <div className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">
              <p
                style={{
                  fontSize: "0.9em",
                  fontWeight: "400",
                  color: "rgba(99, 110, 114,1.0)"
                }}
                align="justify"
              >
                {this.state.Content}
              </p>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
              <button style={exbtn} type="button" class="btn">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
