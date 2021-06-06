import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/Banner/Banner'
import './HomeScreen.css'
import Row from '../../components/Row/Row'
import request from '../../adapters/Request'

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Nav bar */}
            <NavBar />

            {/* banner */}
            <Banner />

            {/* rows  */}

            <Row
                title="Cinema Mela Special"
                fetchUrl={request.fetchTrending}
                isLargeRow={true}
            />

            <Row
                title="Trending Now"
                fetchUrl={request.fetchTrending}
            />

            {/* <Row
                title="Comedy Movies"
                fetchUrl={request.fetchComedyMovies}
            />

            <Row
                title="Horro Movies"
                fetchUrl={request.fetchHorrorMovies}
            />
            <Row
                title="Romantic Movies"
                fetchUrl={request.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={request.fetchDocumentaries}
            /> */}
        </div>
    )
}

export default HomeScreen
