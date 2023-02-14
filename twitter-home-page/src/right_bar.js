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
              <div class="heading">
                space
                <div class="para">
                  loner photography improves the discovery of the moon
                </div>
              </div>

              <div class="image">
                <img class="image1" src={require("./download.jpg")}></img>
              </div>
            </div>
          </div>
          <p class="people">10,094 people are twitting about this</p>
          <p class="border"></p>

          <div>
            <p class="trending">Trending worldwide</p>
            <p class="hashtag">#WorldNews</p>
            <p class="number">125k Tweets</p>
            <p class="people1">5094 people are twitting about this</p>
            <p class="border"></p>
          </div>

          <div>
            <p class="trending">Trending worldwide</p>
            <p class="hashtag">#BreakingNews</p>
            <div class="box1">
              <div class="heading">
                Animals
                <div class="para">
                  These cats are ready for #IntrenationlCatDay
                </div>
              </div>

              <div class="image">
                <img class="image1" src={require("./images.jpg")}></img>
              </div>
            </div>
          </div>
          <p class="people">10,094 people are twitting about this</p>
          <p class="border"></p>

          <div>
            <p class="trending">Trending worldwide</p>
            <p class="hashtag">#GreatesOfAllTime</p>
            <p class="number">100k Tweets</p>
            <p class="people1">4123 people are twitting about this</p>
            <p class="border"></p>
          </div>
          <div class="show">Show more</div>
        </div>
      </div>
    );
  }
}
