import React, { Component } from 'react';
import HelloMessage from '../../components/HelloMessage';
import {
  FormGroup,
  Button,
  Form,
  Label,
  Input,
  ListGroup,
  ListGroupItem
} from 'reactstrap';


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [],
      text: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('paspaude!');
    if (!this.state.text.length) {
      return;
    }

    const randomColor = require('randomcolor');
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      color: randomColor()
    };



    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>Todo list</h1>
        <ListGroup>
          {this.state.items.map(function (listValue) {
            return <ListGroupItem style={{ backgroundColor: listValue.color }}>&#8226; {listValue.text}</ListGroupItem>;
          })}
        </ListGroup>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="new-todo">What needs to be done?</Label>
            <Input type="text" name="todo" id="new-todo" onChange={this.handleChange} value={this.state.text} />
          </FormGroup>
          <Button color="primary">Add</Button>
        </Form>
      </div>
    );
  }
}

export default TodoList;