import React from "react";
import MovieCard from "./MovieCard.js";
import dataMovie from "../BD/data";
import "../CSS/AllCards.css";
const MovieList = () => {
  return (
    <>
      <div className="allCards">
        {dataMovie.map((film) => (
          <MovieCard key={film.id} film={film} />
        ))}
      </div>
      <div className="sectionAddFilm">
        <input type="text" placeholder="title" />
        <input type="text" placeholder="image" />
        <input type="number" placeholder="rate" />
        <textarea
          name="decr"
          id=""
          cols="30"
          rows="10"
          placeholder="description"
        ></textarea>
        <input type="text" placeholder="stream" />
        <input type="text" placeholder="genre" />
        <input type="text" placeholder="download" />
        <select name="lang" id="">
          <option value="">LANG</option>
          <option value="EN">EN</option>
          <option value="FR">FR</option>
          <option value="AR">AR</option>
        </select>
      </div>
    </>
  );
};

export default MovieList;
