import React, { useEffect, useState } from 'react';
import axios from './../../adapters/axios';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchMovieData() {
            try {
                const response = await axios.get(fetchUrl);
                console.log('current response', response);
                setMovies(response?.data.results);
                return response;
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovieData();
    }, [fetchUrl])
    console.log('moives', movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie => (
                        ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                                key={movie.id}
                                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`}
                                alt={movie.name}
                            />
                        )
                    ))
                }
            </div>
        </div>
    );
};

export default Row;