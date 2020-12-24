import React, { createContext, useContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [Books, setBooks] = useState([
    {
      name: "Eloquent Javascript",
      price: 400,
    },
    {
      name: "Php CookBook",
      price: 500,
    },
    {
      name: "Think Python",
      price: 600,
    },
    {
      name: "php 7",
      price: 500,
    },
  ]);

  return (
    <BookContext.Provider value={[Books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
