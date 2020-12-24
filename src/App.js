import logo from './logo.svg';
import './App.css';
import Movielist from "./Component/context/MovieList"
import {MovieProvider} from './Component/context/MovieContext'
import {BookProvider} from './Component/AnotherContextExample/BookContext'
import BookList from "./Component/AnotherContextExample/BookList"
import Nav from './Component/context/Nav';
import AnNav from './Component/AnotherContextExample/AnNav';
import NavBar from './Common/NavBar'
import AddMovie from './Component/context/AddMovie'
function App() {
  return (
   /* start first context api */
    <MovieProvider>
    <div className="App">
      <Nav/>
      <AddMovie></AddMovie>
      <Movielist></Movielist>
    </div>
    </MovieProvider>

   /* end first context api*/

   /* start second context api*/
   
    // <BookProvider>
    // <div className="App">
    //   <AnNav/>
    //   <BookList></BookList>
    // </div>
    // </BookProvider>

    /* end second context api */  
  );
}

export default App;
