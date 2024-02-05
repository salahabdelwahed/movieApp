import React from "react";
import "../CSS/MovieCard.css"; 
import { Link } from "react-router-dom";

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
              <Link to={`/${film.id}`} className="button">
                Watch Now
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
        </main>
    </>
  );
};

export default MovieCard;
