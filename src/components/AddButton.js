import React from "react";
import "./AddButton.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";

export class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonPressedToAdd = this.buttonPressedToAdd.bind(this);
    this.buttonPressedToDelete = this.buttonPressedToDelete.bind(this);
  }

  buttonPressedToAdd(event) {
    this.setState({ value: this.state.value + 1 });
  }

  buttonPressedToDelete(event) {
    if (this.state.value === 0) {
      this.setState({ value: this.state.value });
    } else {
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
          onPress={this.buttonPressedToAdd}
        >
          <b>Click to add</b>
        </AwesomeButton>
        <div className="MarginDelete">
          <AwesomeButton
            type="secondary"
            className="delete"
            onPress={this.buttonPressedToDelete}
          >
            <b>Click to delete</b>.
          </AwesomeButton>
        </div>
        .
      </div>
    );
  }
}
