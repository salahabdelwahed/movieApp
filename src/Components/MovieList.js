// the import of the module will be executed
import React, { useState } from "react";
import MovieCard from "./MovieCard.js";
import dataMovie from "../BD/data";
import "../CSS/AllCards.css";

const MovieList = ({ valueTitle, valueRang, valueGnr,setGetDataFrom }) => {
  // declarations for the states
  const [dataMovieState, setdataMovieState] = useState(dataMovie);
  const [showAddFilm, setShowAddFilm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: "",
    image: "",
    rate: 0,
    decr: "",
    stream: "",
    lang: "",
    genre: "",
    downlaod: "",
  });

  //function get change value from state number3
  const handelChange = (event) => {
    if (event.target.name === "rate") {
      setNewMovie({
        ...newMovie,
        [event.target.name]: parseFloat(event.target.value),
      });
    } else {
      setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
    }
  };
  //end
  //function add movie
  const handelAdd = (newFilm) => {
    setdataMovieState([...dataMovieState, newFilm]);

    setNewMovie({
      id: Math.random(),
      title: "",
      image: "",
      rate: 0,
      decr: "",
      stream: "",
      lang: "",
      genre: "",
      downlaod: "",
    });
  };
  //end
  setGetDataFrom(dataMovieState);
  return (
    <>
      <div className="allCards">
        {dataMovieState
          .filter(
            (film) =>
              (film.title
                .toLocaleLowerCase()
                .includes(valueTitle.toLocaleLowerCase()) &&
              film.rate >= valueRang) && (valueGnr ? film.genre ===valueGnr : true)
          )
          .map((film) => (
            <MovieCard key={film.id} film={film} />
          ))}
      </div>
      {/* //formularie for input all informations of film  */}
      <div className="sectionAddFilm">
        {/* button for affich the formulaire */}
        <button onClick={() => setShowAddFilm(!showAddFilm)}>
          {" "}
          {showAddFilm ? <>-</> : <>+</>}
        </button>
        {/*end  */}

        <>
          {showAddFilm ? (
            <>
              <input
                type="text"
                placeholder="title"
                name="title"
                value={newMovie.title}
                onChange={(event) => handelChange(event)}
                // onChange={(event)=>setNewMovie({...newMovie,title : event.target.value})}
              />
              <input
                type="text"
                placeholder="image"
                name="image"
                value={newMovie.image}
                onChange={(event) => handelChange(event)}
              />
              <input
                type="number"
                placeholder="rate"
                name="rate"
                value={newMovie.rate}
                onChange={(event) => handelChange(event)}
              />
              <textarea
                name="decr"
                id=""
                cols="30"
                rows="10"
                value={newMovie.decr}
                placeholder="description"
                onChange={(event) => handelChange(event)}
              ></textarea>
              <input
                type="text"
                placeholder="stream"
                name="stream"
                value={newMovie.stream}
                onChange={(event) => handelChange(event)}
              />
              <input
                type="text"
                placeholder="genre"
                name="genre"
                value={newMovie.genre}
                onChange={(event) => handelChange(event)}
              />
              <input
                type="text"
                placeholder="downlaod"
                name="downlaod"
                value={newMovie.downlaod}
                onChange={(event) => handelChange(event)}
              />
              <select
                name="lang"
                id=""
                value={newMovie.lang}
                onChange={(event) => handelChange(event)}
              >
                <option value="">LANG</option>
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="AR">AR</option>
              </select>
              <button onClick={() => handelAdd(newMovie)}>ADD</button>
            </>
          ) : null}
        </>
      </div>
    </>
  );
};

export default MovieList;
