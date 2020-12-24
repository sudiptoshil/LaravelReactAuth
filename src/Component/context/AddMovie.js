import React, { useContext, useState } from 'react'
import {MovieContext} from './MovieContext'
const AddMovie = ()=>{
    const [name,setname] = useState("");
    const [price,setprice] = useState("");
    const [MovieList,setMovieList] = useContext(MovieContext);
    const updateName = (e)=>{
        setname(e.target.value);
    }
    const updatePrice = (e)=>{
        setprice(e.target.value);
    }
    const AddMovie = (event) =>{
        event.preventDefault();
        setMovieList(prevMovieList =>[...prevMovieList,{name:name,price:price}])
        setname("");
        setprice("");
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <form onSubmit={AddMovie}>
                    <label>Movie Name:</label>
                    <input type='text' name='name' value={name} onChange={updateName} className='form-control'></input>
                    <br></br>
                    <label>Movie Price:</label>
                    <input type='text' name='price' value={price} onChange={updatePrice} className='form-control'></input>
                    <button>Submit</button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;