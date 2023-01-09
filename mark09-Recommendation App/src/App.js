import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [movieName, setMovieName] = useState([]);
  var movieGenre = {
    comedy: [
      { name: "Hungama", rating: "7.6/10" },
      { name: "Dhamaal", rating: "7.4/10" },
      { name: "Phir Hera Pheri", rating: "7.2/10" }
    ],
    suspense: [
      { name: "Drishyam", rating: "8.2/10" },
      { name: "A Wednesday", rating: "8.1/10" },
      { name: "Special 26", rating: "7.9/10" }
    ],
    drama: [
      { name: "Zindagi Na Milegi Dobara", rating: "8.6/10" },
      { name: "Yeh Jawaani Hai Deewani", rating: "8.2/10" },
      { name: "English Vinglish", rating: "7.8/10" }
    ]
  };

  function clickHandler(event) {
    var genre = event.target.innerText;
    setMovieName(movieGenre[genre]);
    console.log(movieName);
    movieName.map((name) => console.log(name));
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji">
          🎬
        </span>{" "}
        Hindi Movies
      </h1>
      <p>checkout my favourite hindi movies ! select genre to get started</p>
      <div>
        <button name="Comedy" onClick={clickHandler}>
          comedy
        </button>
        <button name="suspense" onClick={clickHandler}>
          suspense
        </button>
        <button name="Drama" onClick={clickHandler}>
          drama
        </button>
      </div>
      <hr />

      <div>
        <ul>
          {movieName.map((movie) => (
            <li>
              {movie.name}
              <small>IMDB: {movie.rating}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
