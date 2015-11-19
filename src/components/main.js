import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    setInterval(this.tick.bind(this), 1000);
  }
  tick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>Welcome to the RelateChat Web Interface</h1>
        Count is {this.state.count}
      </div>
    )
  }
}
