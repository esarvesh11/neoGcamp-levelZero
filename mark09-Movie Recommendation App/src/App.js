import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [movieName, setMovieName] = useState([]);
  var movieGenre = {
    comedy: [
      { name: "Hungama", rating: "7.6/10", description: "The story of a bunch of misfits whose misconception about each others backgrounds end up in a series of chaotic, yet comic outcomes. Aftab and Rimi play two strangers who have to pretend that are a married couple in order to get a place to live." },
      { name: "Dhamaal", rating: "7.4/10", description: "Four lazy slacker conmen buddies who are jobless, homeless and broke learn about the secret of a hidden treasure from a dying thief and later embark on a race against time to find the mobster's buried treasure." },
      { name: "Phir Hera Pheri", rating: "7.2/10", description: "a twist of fate changes the lives of Raju, Shyam and Baburao when they get cheated by a fraudster Anuradha. They must now find another way to repay the loan taken from a dreaded gangster Totla Seth." }
    ],
    suspense: [
      { name: "Drishyam", rating: "8.2/10", description: "Georgekutty (Mohanlal) is a cable-TV network owner in a remote hilly village in Kerala. He lives a happy life with his wife and two daughters. A man goes to extreme lengths to save his family from punishment after the family commits an accidental crime." },
      { name: "A Wednesday", rating: "8.1/10", description: "The story begins as an ordinary thriller about a common man who calls the police and informs them about 5 bombs he has allegedly placed all over Mumbai, which he'll get exploded if they don't release four terrorists. The way every scene is carried by the director is very impressive and the dialogues are realistic." },
      { name: "Special 26", rating: "7.9/10", description: "Based on real life incidents that occurred in India in 1987-88, the storyline revolves around a group of con artists who pulled off many clever robberies during 1980s, and robbed famous businessmen and politicians by pretending to be the CBI or Income tax officers and conducting raids." }
    ],
    drama: [
      { name: "Zindagi Na Milegi Dobara", rating: "8.6/10", description: "Three friends who were inseparable in childhood decide to go on a three-week-long bachelor road trip to Spain, in order to re-establish their bond and explore thrilling adventures, before one of them gets married. What will they learn of themselves and each other during the adventure?" },
      { name: "Yeh Jawaani Hai Deewani", rating: "8.2/10", description: "Yeh Jawaani Hai Deewani is the story of the relationship between two characters, Bunny (Ranbir Kapoor) & Naina (Deepika Padukone. Kabir and Naina bond during a trekking trip. Before Naina can express herself, Kabir leaves India to pursue his career. They meet again years later, but he still cherishes his dreams more than bonds." },
      { name: "English Vinglish", rating: "7.8/10", description: "The story of a quiet, sweet tempered housewife who endures small slights from her well educated husband and daughter everyday because of her inability to speak and understand English." }
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
              <h3>{movie.name}</h3>
              <small>IMDB: {movie.rating}</small>
              <p>{movie.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
