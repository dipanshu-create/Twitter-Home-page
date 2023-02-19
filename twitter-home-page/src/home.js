import React, { Component } from "react";
import "./home.css";
import { Button, Stack } from "react-bootstrap";
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
          <div class="usericon">
            <div>
              <img
                class="senditems"
                src={require("./twitter-image.png.webp")}
              ></img>
            </div>
            <div>
              <img
                class="senditems"
                src={require("./twitter-poll.png.webp")}
              ></img>
            </div>
            <div>
              <img
                class="senditems"
                src={require("./twitter-giff.png.webp")}
              ></img>
            </div>
            <div>
              <img
                class="senditems"
                src={require("./twitter-emoji.png.webp")}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
