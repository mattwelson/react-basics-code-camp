import React from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const Colour = props => (
  <Slider
    value={props.value}
    min={0}
    max={props.max}
    onChange={(value) => props.updateColour({
      [props.name]: value
    })}
  />
);

export default Colour;
