import React from "react";
import Button from "../Button/Button";
// onClick入れるときは<div onClick><Buton/></div>のように囲ってるタグに入れる
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div
          onClick={() => {
            this.increment();
          }}
        >
          <Button name="インクリメント" />
        </div>
        <div
          onClick={() => {
            this.decrement();
          }}
        >
          <Button
            name="デクリメント"
            onClick={() => {
              this.decrement();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
