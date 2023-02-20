import React, { Component } from "react";
import "./home.css";
import "FontAwesomeIcon";
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
            <div
              style={{
                display: "inline-block",
                marginLeft: "5px",
                marginTop: "0px",
              }}
            >
              <img
                class="senditems"
                src={require("./twitter-image.png.webp")}
              ></img>
            </div>
            <div style={{ display: "inline-block", marginBottom: "2px" }}>
              <img
                class="senditems"
                src={require("./twitter-poll.png.webp")}
              ></img>
            </div>
            <div style={{ display: "inline-block", marginBottom: "2px" }}>
              <img
                class="senditems"
                src={require("./twitter-giff.png.webp")}
              ></img>
            </div>
            <div style={{ display: "inline-block", marginBottom: "2px" }}>
              <img
                class="senditems"
                src={require("./twitter-emoji.png.webp")}
              ></img>
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: "320px",
                marginTop: "2px;",
              }}
            >
              <button class="tweetbutton">Tweet</button>
            </div>
          </div>
          <p class="border1"></p>
          <div>
            <div class="imageh2">
              <img class="imageh1" src={require("./images (1).jpg")}></img>
            </div>
            <div style={{ height: "30px" }}>
              <p
                style={{
                  paddingTop: "5px",
                  paddingLeft: "10px",
                  paddingRight: "4px",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                Brie
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  paddingRight: "5px",
                  display: "inline-block",
                }}
              >
                @sketch_comedyFan . 3m
              </p>
            </div>
            <div>
              <p
                style={{
                  paddingLeft: "10px",
                }}
              >
                Giving standup comedy a go. Open mic starts at 7, hit me up if
                you want ticket
                <span style={{ color: "blue" }}>#heregoesnothing</span>
              </p>
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                </svg>
              </div>
              <div>
                <FontAwesomeIcon icon="fa-solid fa-retweet" />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
