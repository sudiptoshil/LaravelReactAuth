import React, { createContext, useContext, useState } from "react";
import {MovieContext} from './MovieContext'
const Nav = ()=>{
    const [MovieList, setMovieList] = useContext(MovieContext);
    return(
        <div>
            <p>Movie Count:-{MovieList.length}</p>
        </div>
    );

}

export default Nav;