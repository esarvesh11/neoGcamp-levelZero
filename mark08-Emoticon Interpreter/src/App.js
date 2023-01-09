import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤩": "Star-Struck",
  "😤": "Face with Steam From Nose",
  "🙌": "Raising Hands",
  "🙈": "See-No-Evil Monkey",
  "🌜": "Last Quarter Moon Face",
  "🍽️": "Fork and Knife with Plate",
  "⛹️": "Person Bouncing Ball",
  "🎯": "Bullseye",
  "🌃": "Night with Stars",
  "📑": "Bookmark Tabs"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("emoji meaning will appear here😉");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "404..Emoji not found😞";
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
