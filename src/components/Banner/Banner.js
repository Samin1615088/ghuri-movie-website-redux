import React from 'react'
import './Banner.css';

function Banner() {
    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC)`,
                // backgroundImage: `url(https://wealthlab.co/wp-content/uploads/2018/08/Netflix_logo.svg_.png)`,
                backgroundPosition: 'center center',
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">This is test title</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description </h1>
            </div>
            {/* <div className="banner_fadeBottom" /> */}

        </header>
    )
}

export default Banner
