import React from "react";
import "../CSS/MovieCard.css";

const MovieCard = ({film}) => {
  return (
    <>
        <main>
          <div className="card">
            <img src={film.image} alt="" />
            <div className="card-content">
              <h2>{film.title}</h2>
              <p>
                {film.decr}
              </p>
              <a href="test" className="button">
                Watch Now
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        </main>
    </>
  );
};

export default MovieCard;
