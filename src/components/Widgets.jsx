import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1462810093624385544"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ReactJSNews"
          option={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.linkedin.com/in/s-dinesh-472a54175/"}
          option={{ text: "#reactjs is awesome", via: "Dinesh" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
