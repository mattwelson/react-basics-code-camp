import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  margin: "2em"
};

const App = () => (
  <div style={styles} className="box">
    <h1 className="title">Counters</h1>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
