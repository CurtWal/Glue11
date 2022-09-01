import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export default class AllToDos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
    };
  }
  toDoHandler = async () => {
    const API = "http://localhost:3002/todo";
    let res = await axios.get(API);
    this.setState({
      toDoList: res.data,
    });
    console.log(this.state.toDoList);
  };
  render() {
    return (
      <div>
        <button onClick={this.toDoHandler}>ToDo List</button>
        {this.state.toDoList.map((todos) => {
          return (
            <Card key={todos._id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{todos.todoDescription}</Card.Title>
                <Card.Text>{todos.dueDate}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
