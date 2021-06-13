import React, { useState, useEffect , memo} from "react";
import "./index.css";


function MoviesPage() {
  const [rating, setRating] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setRating(rating + Math.floor(Math.random() * 4));
    }, 3000);
  }, [rating]);
  console.log(rating)
  const renderBox = (img, moviename, releaseDate, rating) => {
    return (
      <div className={"moviecard"}>
        <img src={img}></img>
        <div className={"movieContent"}>
          <h3 className={"moviename"}>{moviename}</h3>
          <p className={"releasedate"}>{releaseDate}</p>
          <p className={"rating"}>{rating}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={"movieContainer"}>
      {renderBox("https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg", "ETERNAL", "10th December 2020", rating)}
      {renderBox("https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg", "INCREDIBLES", "5th June 2018", "7")}
      {renderBox("https://rukminim1.flixcart.com/image/416/416/k1wgx3k0/poster/x/h/g/medium-joker-movie-poster-for-room-office-joker-happy-face-original-imafhdznfcpymd4s.jpeg?q=70", "CIVIl WAR", "6th May 2016", "8.5")}
    </div>
  );
}

export default memo(MoviesPage);