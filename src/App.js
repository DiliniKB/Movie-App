import React, { useEffect } from 'react';

import MovieCard from './MovieCard';

import SearchIcon from './search.svg';
import './App.css';

const movie_URL = 'http://www.omdbapi.com/?apikey=7bb532c1';

const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    Title: "Spider-Man",
    Type: "movie",
    Year: "2002",
    imdbID: "tt0145487"
}

const App = () => {

    const SearchMovies = async (title) => {
        const response = await fetch(`${movie_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        SearchMovies('spider');
    },[]);

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    onChange={()=>{}}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={()=>{}}
                />
            </div>

            <div className='container'>
                <MovieCard movie1={movie1} />
            </div>
        </div>
        
    );
}

export default App;