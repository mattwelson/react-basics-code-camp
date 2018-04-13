import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div className="box">
        <h1 className="title">Counter</h1>
        <div className="tags has-addons" style={{justifyContent:'center'}}>
        <span className="tag is-info">{this.state.count}</span>
        <span className="tag">++</span>
        </div>
      </div>
    );
  }
}

export default Counter;
