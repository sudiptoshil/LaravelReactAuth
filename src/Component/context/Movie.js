import React from "react";

const Movie = ({ id, name, price }) => {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-8'>
      <ul>
        <li>{name}</li>
        <li>{price}</li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Movie;
