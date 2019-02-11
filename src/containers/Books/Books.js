import React, { Component } from 'react';
import HelloMessage from '../../components/HelloMessage';

class Books extends Component {
  render() {
    return (
      <div>
        <HelloMessage name="Books" />
      </div>
    );
  }
}

export default Books;