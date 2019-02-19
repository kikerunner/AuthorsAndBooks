import React from "react";
import { addCuenta } from "../actions/userActions"

export default class AddUserForm extends React.Component {

  constructor() {
    super();
    this.state = {

      numAccount: "",
      balance: "",
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  keyPressed(event) {
    if (event.keyCode == 13) { // If enter is pressed
      this.addCuenta();
      console.log("item inserted")
    }
  }

  addCuenta() {
    addCuenta(this.state);
  }

  render() {
    const cssStyle = {
      'marginBottom': '20px'
    }

    return (
      <div class="input-group col-md-4 col-md-offset-4" style={cssStyle}>
        <div>
          <input type="text" class="form-control"
            name="numAccount"
            placeholder="Add a new user numAccount..."
            value={this.state.numAccount}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} />
          <input type="integer" class="form-control"
            name="balance"
            placeholder="Add a new balance..."
            value={this.state.balance}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} />
        </div>
        <div>
          <button className="btn btn-default" type="button" onClick={this.addCuenta.bind(this)}>Insert User</button>
        </div>
      </div>
    );
  }
}