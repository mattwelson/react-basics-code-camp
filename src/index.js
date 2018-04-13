import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  padding: "2em"
};

const App = () => (
  <div style={styles}>
    <Counter />
  </div>
);

render(<App />, document.getElementById("root"));
