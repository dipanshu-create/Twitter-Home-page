import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="ho">
          <p class="h">Home</p>
        </div>
        <p class="border"></p>

        <div>
          <div class="imageh">
            <img class="imageh1" src={require("./images (1).jpg")}></img>
          </div>
          <div class="post">whats happening</div>
          <div class="usericon"></div>
        </div>
      </div>
    );
  }
}
