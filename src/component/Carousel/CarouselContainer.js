import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./CarouselContainer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// react-responsive-carousel

const CarouselContainer = () => {
  const images = [
      "https://orchidfashionworld.com/wp-content/uploads/2021/01/311-2.jpg",
      "https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      "https://media.funalive.com/article/images/South-Indian-bride-saree-1.jpg",
      "https://media.kreeva.com/wysiwyg/CategoryBlock/Saree/oct/Saree_Banner_Desktop.jpg",
  ];

  return (
    <div className="carousel__background">
      <Carousel infiniteLoop autoPlay interval={3000} dynamicHeight showThumbs={false}>
        {images?.map((image) => {
          return (
            <div>
              <img src={image} alt={image}/>
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
                <div className="carousel__background__details__heading">Hot Trends of This Year</div>
                <div className="carousel__background__details__title">
                  Wedding Collection
                </div>
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
