import React, { useContext } from 'react'
import {BookContext} from "./BookContext"
const AnNav = (props)=>{
    const [Books, setBooks] = useContext(BookContext);

    return(
        <div>
            <h2>Object Count:{Books.length}</h2>
        </div>
    );
}
export default AnNav;