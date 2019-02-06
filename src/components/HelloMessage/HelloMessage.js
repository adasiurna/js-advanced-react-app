import React, { Component } from 'react';
import './HelloMessage.css';

class HelloMessage extends Component {

  render() {
    const styles = [this.props.fontWeight, this.props.color];
    console.log(styles);
    return (
      <div>
        <h1 className={styles.join(" ")}>Laba diena, {this.props.name}!</h1>
      </div>
    )
  }
}

export default HelloMessage;

