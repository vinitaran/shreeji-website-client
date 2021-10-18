import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./CarouselContainer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// react-responsive-carousel

const CarouselContainer = () => {
  const images = [
      "https://www.cbazaar.com/blog/wp-content/uploads/2020/11/WP_Blog_Nov16.jpg",
      "https://cdn.shopify.com/s/files/1/0267/0238/1098/files/home_slider_1.jpg?v=1592873343",
      "https://www.cbazaar.com/blog/wp-content/uploads/2020/11/WP_Blog_Nov16.jpg",
  ];

  return (
    <div className="carousel__background">
      <Carousel infiniteLoop autoPlay interval={3000} dynamicHeight showThumbs={false}>
        {images?.map((image) => {
          return (
            <div>
              <img src={image} />
              {/* <div style={{ width: "35%", left: "77.45%"}} className="carousel__background__details legend">
                <h3 className='legend'>Bridal Collection</h3>
                <button
                  style={{ width: "35%", left: "77.45%", background: "orange", border: "none" }}
                >
                  Shop Now
                </button>
              </div> */}
              {/* <p className="legend">Shop Now</p> */}
              <div className="carousel__background__details">
                <div>Bridal Collection</div>
                <button>
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
