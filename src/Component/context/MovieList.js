import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
function MovieList(props) {
  const [MovieList,setMovieList] = useContext(MovieContext);
  const value = useContext(MovieContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {/* <li>{value}</li> */}
          {MovieList.map((movie) => {
            return <Movie name={movie.name} price={movie.price}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
