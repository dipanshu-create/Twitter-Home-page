import React, { Component } from "react";
import "./right.css";

export default class Right_bar extends Component {
  render() {
    return (
      <div>
        <div>
      <form>
          <input
            type="text"
            class="input-field-control"
            placeholder="Search"
          ></input>
      </form>
        </div>
      </div>
    );
  }
}
