import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import SearchIcon from './search.svg';
import './App.css';

const movie_URL = 'http://www.omdbapi.com/?apikey=7bb532c1';

// const movie1 = {
//     Poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
//     Title: "Spider-Man",
//     Type: "movie",
//     Year: "2002",
//     imdbID: "tt0145487"
// }

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const SearchMovies = async (title) => {
        const response = await fetch(`${movie_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(movies);
    }

    useEffect(() => {
        SearchMovies("spider");
    },[]);

    return(
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={()=>SearchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ?(
                <div className='container'>
                    {movies.map((movie)=> (
                            <MovieCard movie={movie} />))}                        
                </div>
            ):(
                <h2>No moviews</h2>
            )}

        </div>
        
    );
}

export default App;