import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Novedad from "./components/Novedad";
import Footer from "./components/Footer";
import "./App.css";

import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Novedad />
      <Footer />
    </div>
  );
}

export default App;
