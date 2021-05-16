import React from 'react'
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import './HomeScreen.css'

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Nav bar */}
            <NavBar />

            {/* banner */}
            <Banner />

            {/* rows  */}
        </div>
    )
}

export default HomeScreen
