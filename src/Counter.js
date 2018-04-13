import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    return (
      <div className="tags has-addons" style={{ justifyContent: "center" }}>
        <span className="tag is-info">{this.state.count}</span>
        <span className="tag" onClick={this.handleIncrement}>
          ++
        </span>
      </div>
    );
  }
}

export default Counter;
