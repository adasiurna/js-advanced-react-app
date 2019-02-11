import React, { Component } from 'react';
import {
  Button
} from 'reactstrap';

class Authors extends Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);

    this.state = {
      seconds: 0
    }
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {

    return (
      <div>
        <h1>Authors container</h1>
        <div>
          <p>Seconds: {this.state.seconds}</p>
          <Button color="primary" onClick={this.tick}>Increase seconds!</Button>
        </div>
      </div>
    );
  }
}

export default Authors;