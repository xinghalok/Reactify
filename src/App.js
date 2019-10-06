import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Floaters from "./components/floaters";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Floaters />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
