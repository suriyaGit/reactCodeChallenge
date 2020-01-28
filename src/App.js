import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Continent from "./Component/ContinentList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Continent></Continent>
    </div>
  );
}

export default App;
