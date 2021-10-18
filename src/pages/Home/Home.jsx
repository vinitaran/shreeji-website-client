import React from 'react';
import CarouselContainer from '../../component/Carousel/CarouselContainer';
import Footer from '../../component/Footer/Footer';
// import Card from 'react-bootstrap/Card'

export default function Home() {
    return (
        <div className="home">            
            <CarouselContainer />
            <Footer />
        </div>
    )
}
