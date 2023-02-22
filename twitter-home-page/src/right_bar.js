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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
              </svg>
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
