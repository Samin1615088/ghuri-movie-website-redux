import React from 'react'
import './Banner.css';

function Banner() {
    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://wealthlab.co/wp-content/uploads/2018/08/Netflix_logo.svg_.png)`,
                backgroundPosition: 'center center',
            }}>
            <div className="banner_contents">
                <h1 className="banner_title"></h1>
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                <h1 className="banner_description">This is a test description</h1>

                <div className="banner--fadeBottom">

                </div>
            </div>

        </header>
    )
}

export default Banner
