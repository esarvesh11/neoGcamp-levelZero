import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [movieName, setMovieName] = useState([]);
  var movieGenre = {
    comedy: [
      { name: "The Hangover", rating: "7.8/10" },
      { name: "Hera Pheri", rating: "8.1/10" },
      { name: "The Hangover", rating: "6.5/10" }
    ],
    "sci-fi": [
      { name: "Tenet 7.3", rating: "7.3/10" },
      { name: "Inception", rating: "8.8/10" },
      { name: "Iron Man", rating: "7.9/10" }
    ],
    drama: [
      { name: "Prisoners", rating: "6.9/10" },
      { name: "Good Will Hunting", rating: "8.2/10" },
      { name: "Jersey", rating: "8.5/10" }
    ]
  };

  // var movieGenre = {
  //   comedy: "The Hangover 7.8",
  //   "sci-fi": "Tenet 7.3",
  //   drama: "Prisoners"
  // };

  function clickHandler(event) {
    var genre = event.target.innerText;
    setMovieName(movieGenre[genre]);
    console.log(movieName);
    movieName.map((name) => console.log(name));
  }

  return (
    <div className="App">
      <h1>📺 goodmovies</h1>
      <p>checkout my favourite movies ! select genre to get started</p>
      <div>
        <button
          name="Comedy"
          style={{
            margin: "1rem",
            padding: "0.2rem 0.2rem",
            cursor: "pointer"
          }}
          onClick={clickHandler}
        >
          comedy
        </button>
        <button
          name="Sci-Fi"
          style={{
            margin: "1rem",
            padding: "0.2rem 0.2rem",
            cursor: "pointer"
          }}
          onClick={clickHandler}
        >
          sci-fi
        </button>
        <button
          name="Drama"
          style={{
            margin: "1rem",
            padding: "0.2rem 0.2rem",
            cursor: "pointer"
          }}
          onClick={clickHandler}
        >
          drama
        </button>
      </div>
      <hr />

      <div>
        <ul>
          {movieName.map((movie) => (
            <li
              style={{
                listStyleType: "none",
                border: "1px solid black",
                padding: "1rem 0.8rem",
                borderRadius: "0.5rem",
                margin: "0.5rem",
                textAlign: "left",
                fontWeight: "bold"
              }}
            >
              {movie.name}
              <small
                style={{
                  textAlign: "left",
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: "lighter"
                }}
              >
                IMDB: {movie.rating}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
