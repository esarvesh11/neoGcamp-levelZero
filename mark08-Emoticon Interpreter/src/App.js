import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π€©": "Star-Struck",
  "π€": "Face with Steam From Nose",
  "π": "Raising Hands",
  "π": "See-No-Evil Monkey",
  "π": "Last Quarter Moon Face",
  "π½οΈ": "Fork and Knife with Plate",
  "βΉοΈ": "Person Bouncing Ball",
  "π―": "Bullseye",
  "π": "Night with Stars",
  "π": "Bookmark Tabs"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("emoji meaning will appear hereπ");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "404..Emoji not foundπ";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>Emoticon Interpreter</h1>

      <input placeholder={"enter your emoji"} onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
