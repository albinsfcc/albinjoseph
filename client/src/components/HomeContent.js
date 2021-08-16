import React from 'react'
import Banner from './content/Banner';
import Cards from './content/Cards';
import Hero from './content/Hero';
import Technologies from './content/Technologies';

function HomeContent() {
    return (
        <div className="home-main">
            <Hero />
            <Cards />
            <Technologies />
            <Banner />
        </div>
    )
}

export default HomeContent
