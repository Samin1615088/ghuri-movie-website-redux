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

        </header>
    )
}

export default Banner
