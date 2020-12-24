import React,{useState,createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props)=>{
    const [MovieList, setMovieList] = useState([
        {
          name: "Eloquent Javascript",
          price: 200,
        }
      ]);
    return (
        <MovieContext.Provider value={[MovieList,setMovieList]}>
            {props.children}
        </MovieContext.Provider>
    );
}
