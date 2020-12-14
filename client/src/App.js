import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { Route, Switch } from 'react-router-dom'
// importing route
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          
          setMovieList(response.data)
          // and set the response data as the 'movieList' slice of state
        })
        
        .catch(error => {
          debugger
          console.error('Server Error', error);
        });
    } 
    
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
    
   
  
      <Route path = '/movie/:{itemId}'>
        <Movie />
      </Route>

      <Route path = '/'>
        <MovieList movies = {movieList} />
      </Route>
      
     
    </div>
  );
}
