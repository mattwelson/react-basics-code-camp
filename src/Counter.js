import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
