import React, { useContext, useState } from 'react'
import Book from './Book'
import {BookContext} from './BookContext';

 const BookList = ()=>{
    const [Books, setBooks] = useContext(BookContext)
    return(
        <div>
            <ul>
                {
                   Books.map((book)=>{
                       return(
                           <Book name={book.name}></Book>
                       );
                   }) 
                }
                {/* {
                    value
                } */}
            </ul>
        </div>
    )


}
export default BookList;