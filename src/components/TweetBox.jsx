import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="What's happening?" type="text" />
        </div>
        <Button className="tweetBox__button">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
