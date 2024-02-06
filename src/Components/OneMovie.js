import React from "react";
import { useParams } from "react-router-dom";
import "../CSS/OneMovie.css";

const OneMovie = ({ getDataFrom }) => {
  const para = useParams();
  const OneMov = getDataFrom.filter((film) => film.id == para.id)[0];
  console.log(OneMov);

  if (OneMov) {
    return (
      <div className="global">
        <div className="overaly">
          <h1>{OneMov.title}</h1>
          <div className="overaly-into">
            <img src={OneMov.image} alt="" />
            <div className="info">
              <label> Description :</label>
              <p>{OneMov.decr}</p>
              <label>Genre :</label>
              <p>{OneMov.genre}</p>
              <label>Lang :</label>
              <p>{OneMov.lang}</p>
              <label>Rate :</label>
              <p>{OneMov.rate} 
              <i class="fa-solid fa-star"/> 
              </p>
            </div>
          </div>
          <video src={OneMov.stream} controls />
          <button>
            <a href="https://filelions.live/d/yfeamhvozrrf">Downlaod</a>
          </button>
        </div>
      </div>
    );
  }
};

export default OneMovie;
