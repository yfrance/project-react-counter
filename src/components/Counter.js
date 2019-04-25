import React from "react";
import "./Counter.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(event) {
    this.setState({ value: this.state.value + 1 });
  }

  handleDelete(event) {
    if (!this.state.value <= 0) {
      this.setState({ value: this.state.value - 1 });
    }
  }

  render() {
    return (
      <div className="Counter">
        <div className="NumberResult">{this.state.value}</div>
        <div className="MarginAdd" />
        <AwesomeButton
          type="secondary"
          className="add"
          onPress={this.handleAdd}
        >
          <b>Click to add</b>
        </AwesomeButton>
        <div className="MarginDelete">
          <AwesomeButton
            type="secondary"
            className="delete"
            onPress={this.handleDelete}
          >
            <b>Click to delete</b>.
          </AwesomeButton>
        </div>
        .
      </div>
    );
  }
}
