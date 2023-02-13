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
          <p class="border"></p>

          <div>
            <p class="trending">Trending worldwide</p>
            <p class="hashtag">#BreakingNews</p>
            <div class="box1">
              <div class="heading"> space</div>
              <div class="a12"></div>
              <div class="a12"></div>
              <div class="a12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
