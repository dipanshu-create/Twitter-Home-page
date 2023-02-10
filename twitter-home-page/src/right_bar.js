import React, { Component } from "react";
import "./right.css";

export default class Right_bar extends Component {
  render() {
    return (
      <div>
        <div class="search">
          <input class="input" placeholder="Search Twitter"></input>
        </div>
        <div class="box">
          <div class="a">
            <p class="a1">Trends for you</p>
            <p class="a1" id="a12">
              *
            </p>
          </div>
        </div>
      </div>
    );
  }
}
