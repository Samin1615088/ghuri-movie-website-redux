import React, { useEffect } from 'react';
import axios from './../../adapters/axios';

const Row = ({ title, fetchUrl, isLargeRow }) => {

    useEffect(() => {
        async function fetchMovieData() {
            try {
                const response = await axios.get(fetchUrl);
                console.log('current response', response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovieData();
    }, [fetchUrl])

    return (
        <div className="row">
           
        </div>
    );
};

export default Row;