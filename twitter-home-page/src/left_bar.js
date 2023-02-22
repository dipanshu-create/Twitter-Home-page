import React, { Component } from "react";
import "./left.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default class Left_bar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="https://www.twitter.com/jamesqquick" className="twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
        <div style={{ display: "inline-block" }}>
          <i class="fas fa-home"></i>
          <div class="text">Home</div>
        </div>
        <div style={{ display: "inline-block" }}>
          <i class="fas fa-hashtag"></i>
          <div class="text">Explore</div>
        </div>

        <div style={{ display: "inline-block" }}>
          <i class="fas fa-bell"></i>
          <div class="text">Notification</div>
        </div>

        <div style={{ display: "inline-block" }}>
          <i class="fas fa-envelope"></i>
          <div class="text">Message</div>
        </div>

        <div style={{ display: "inline-block" }}>
          <i class="fas fa-bookmark"></i>
          <div class="text">Bookmarks</div>
        </div>

        <div style={{ display: "inline-block" }}>
          <i class="fas fa-list"></i>
          <div class="text">Lists</div>
        </div>

        <div style={{ display: "inline-block" }}>
          <i class="fas fa-user"></i>
          <div class="text">Profile</div>
        </div>

        <div style={{ display: "inline-block" }}>
          <i class="fas fa-ellipsis-h"></i>
          <div class="text">More</div>
        </div>
        <div>
          <button class="tweetbutton1">Tweet</button>
        </div>
      </div>
    );
  }
}
