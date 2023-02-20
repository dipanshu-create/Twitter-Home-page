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
                  paddingBottom: "0px",
                  marginBottom: "2px",
                }}
              >
                Giving standup comedy a go. Open mic starts at 7, hit me up if
                you want ticket
                <span style={{ color: "blue" }}>#heregoesnothing</span>
              </p>
            </div>
            <div>
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
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
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
              </div>
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
              </div>
            </div>
          </div>
          <p class="border"></p>
          <div>
            <div class="imageh3">
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
                Harold
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  paddingRight: "5px",
                  display: "inline-block",
                }}
              >
                @h_wang88 . 10m
              </p>
            </div>
            <div>
              <p
                style={{
                  paddingLeft: "10px",
                  paddingBottom: "0px",
                  marginBottom: "2px",
                }}
              >
                Vacation is going great!
              </p>
            </div>
            <img class="postimage" src={require("./download (1).jpg")}></img>
            <div>
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
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
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                </svg>
              </div>
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <div
                style={{
                  paddingLeft: "10px",
                  display: "inline-block",
                  width: "10px",
                  paddingRight: "120px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
