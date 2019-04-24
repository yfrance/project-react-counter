import React from "react";
import "./AddButton.css";

export class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonClickedToAdd = this.buttonClickedToAdd.bind(this);
    this.buttonClickedToDelete = this.buttonClickedToDelete.bind(this);
  }

  buttonClickedToAdd(event) {
    this.setState({ value: this.state.value + 1 });
  }

  buttonClickedToDelete(event) {
    if (this.state.value === 0) {
      this.setState({ value: this.state.value });
    } else {
      this.setState({ value: this.state.value - 1 });
    }
  }

  render() {
    return (
      <div className="counter">
        <div className="numberResult">{this.state.value}</div>
        <button className="add" onClick={this.buttonClickedToAdd}>
          <b>Click to add</b>
        </button>
        <button className="delete" onClick={this.buttonClickedToDelete}>
          <b>Click to delete</b>.
        </button>
      </div>
    );
  }
}
