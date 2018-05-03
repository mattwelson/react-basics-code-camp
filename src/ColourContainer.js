import React from "react";
import Colour from "./Colour";

const styles = {
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class ColourCountainer extends React.Component {
  state = this.props.defaultState;

  updateColour = update => {
    this.setState(() => update);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {this.props.colors.map(c => (
          <Colour
            key={c.name}
            name={c.name}
            max={c.max}
            value={this.state[c.name]}
            updateColour={this.updateColour}
          />
        ))}
        <div
          style={{
            ...styles,
            backgroundColor: this.props.colorFromObject(this.state),
            color: this.props.getTextColor(this.state)
          }}
        >
          {this.props.colorFromObject(this.state)}
        </div>
      </div>
    );
  }
}

export default ColourCountainer;
