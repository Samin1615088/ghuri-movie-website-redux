import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import request from '../../adapters/Request';
import axios from './../../adapters/axios';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // Want to use async/await? Add the `async` keyword to your outer function/method.
        async function fetchData() {
            try {
                const response = await axios.get(request.fetchNetflixOriginals);
                console.log(response);
                setMovie(
                    response.data?.results?.[
                    Math.floor(Math.random() * 20)
                    ]
                )
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])
    // console.log(movie)

    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path || ""})`,
                // backgroundImage: `url(https://wealthlab.co/wp-content/uploads/2018/08/Netflix_logo.svg_.png)`,
                backgroundPosition: 'top center',
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <div className="banner--fadeBottom"></div>

                <h1 className="banner_description">
                    <Typewriter
                        options={{
                            strings: [truncate(movie?.overview, 150)],
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            skipAddStyles: true,
                            pauseFor: 10000,
                            deleteSpeed:10
                        }}
                    />
                </h1>

            </div>

        </header>
    )
}

export default Banner
