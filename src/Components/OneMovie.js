import React from "react";
import { useParams } from "react-router-dom";

const OneMovie = ({ getDataFrom }) => {
  const para = useParams();
  const OneMov = getDataFrom.filter((film) => film.id == para.id)[0];
  console.log(OneMov);

  if (!OneMov) {
    return (
      <div>
        <h1>{OneMov.title}</h1>
        <img src={OneMov.image} alt="" />
        <p>{OneMov.decr}</p>
        <h4>{OneMov.genre}</h4>
        <h3>lang:{OneMov.lang}</h3>
        <video src={OneMov.stream} controls />
        <button>
          <a href="https://filelions.live/d/yfeamhvozrrf">Downlaod</a>
        </button>
      </div>
    );
  } else {
    return <div>no</div>;
  }
};

export default OneMovie;
