import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
        fetch('/content/banners', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
            .then((res) => res.json())
            .then((res) => {
                setBannerData(res);
                console.log(res);
            });
        }, [])
        return (
            <div className="banner">
                <Carousel variant="dark" interval={5000} pause={false} >
                    {
                        bannerData.map((bannerContent) => {
                        return <Carousel.Item key={bannerContent._id}>
                                <img
                                className="d-block w-100"
                                src={bannerContent.imageURL}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5>{bannerContent.title}</h5>
                                <p>{bannerContent.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        })
                    }
                </Carousel>
            </div>
    )
}

export default Banner
