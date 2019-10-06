import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        "fab fa-twitter fa-2x",
        "fab fa-linkedin-in fa-2x",
        "fab fa-instagram fa-2x",
        "fab fa-facebook fa-2x"
      ]
    };
  }

  render() {
    const socialogo = {
      display: "inline-block",
      margin: "auto",
      paddingLeft: "3%",
      paddingRight: "3%",
      overflow: "hidden"
    };

    return (
      <div style={{ position: "relative", width: "100%", margin: "auto" }}>
        {this.state.icons.map(ic => (
          <div style={socialogo}>
            <i class={ic}></i>
          </div>
        ))}
      </div>
    );
  }
}

class Footrefs extends Component {
  constructor() {
    super();
    this.state = {
      refs: [
        { id: "1", name: "Privacy policy", href: "#" },
        { id: "2", name: "Terms of service", href: "#" },
        { id: "3", name: "Service Agreement", href: "#" },
        { id: "4", name: "Contact us", href: "#" }
      ]
    };
  }

  render() {
    const refes = {
      position: "relative",
      display: "inline-block",
      margin: "auto",
      paddingLeft: "2%",
      paddingRight: "2%",
      textAlign: "center",
      overflow: "hidden",
      whiteSpace: "nowrap",
      borderRight: "1px solid rgba(99, 110, 114,1.0)",
      fontSize: "1em",
      textDecoration: "underline",
      fontWeight: "400"
    };

    return (
      <div style={{ position: "relative", width: "100%", margin: "auto" }}>
        {this.state.refs.map((link, index) => (
          <div key={index} style={refes}>
            <a id={link.id} href={link.href}>
              {link.name}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    const footColumn = {
      marginTop: "4%"
    };

    const footColumnrefs = {
      marginBottom: "4%"
    };

    return (
      <footer
        style={{ backgroundColor: "white", color: "rgba(99, 110, 114,1.0)" }}
      >
        <div className="row">
          <div
            style={footColumn}
            className="offset-2 col-4 col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
          >
            <div className="row" style={{ textAlign: "center" }}>
              <Social />
            </div>

            <div
              className="row"
              style={{ justifyContent: "center", marginTop: "1%" }}
            >
              <p align="center" style={{ letterSpacing: "0.1px" }}>
                Copyright @ 2019 White Panda Media Pvt. Ltd.
                <br /> All Rights Reserved
              </p>
            </div>
          </div>

          <div
            style={footColumnrefs}
            className="offset-2 col-8 col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
          >
            <div className="row" style={{ textAlign: "center" }}>
              <Footrefs />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
