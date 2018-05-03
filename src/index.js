import React from "react";
import { render } from "react-dom";
import ColourContainer from "./ColourContainer";
import {
  rgb,
  hsl
} from './helpers'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  margin: "2em"
};

const App = () => (
  <div style={styles} className="box">
    <h1 className="title">Colours</h1>
    <ColourContainer {...rgb} />
    <ColourContainer {...hsl} />
  </div>
);

render(<App />, document.getElementById("root"));
