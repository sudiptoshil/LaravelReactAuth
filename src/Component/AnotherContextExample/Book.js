import React from "react"

const Book = (props)=>{
    return(
        <div>
            <ul>
                {
                    props.name
                }
            </ul>
        </div>
    );
}

export default Book;