import React from 'react';
import CarouselContainer from '../../component/Carousel/CarouselContainer';
import Tabs from '../../component/Tabs/Tabs';
import "./Home.css";

// import Card from 'react-bootstrap/Card'

const tabsDb = [
    {
        id:"1",
        collection:"Wedding Collection",
        heading:"Engagement",
        imageUrl:"https://cdn0.weddingwire.in/articles/images/9/9/6/6/img_86699/engagement-outfits-p-o-s-h-a-k-latest-engagement-dress-lehengas.jpg"
    },
    {
        id:"2",
        collection:"Starts from ₹1000",
        heading:"Haldi",
        imageUrl:"https://sareeblog.b-cdn.net/wp-content/uploads/2021/03/Yellow-Muslin-Fancy-Palazzo-Suit-with-Embroidery.jpg"
    },
    {
        id:"3",
        collection:"Wedding Collection",
        heading:"Mehendi",
        imageUrl:"https://getethnic.com/wp-content/uploads/2019/01/Picture11.jpg"
    },
    {
        id:"4",
        collection:"Starts from ₹1000",
        heading:"Sangeet",
        imageUrl:"http://cdn.shopify.com/s/files/1/0252/9897/products/5403cfn.jpg?v=1611900510"
    },
    {
        id:"5",
        collection:"Wedding Collection",
        heading:"Wedding",
        imageUrl:"https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/309/308/new_medium/the_dazzling_sabhyasachi_ensemble.jpg?1514365706"
    },
    {
        id:"6",
        collection:"Starts from ₹1000",
        heading:"Reception",
        imageUrl:"https://www.mongoosekart.com/image/data/Lehenga/Malaika%20Arora%20ruby%20silk%20bridal%20lehenga.jpg"
    },
    {
        id:"7",
        collection:"Wedding Collection",
        heading:"Bridesmaids",
        imageUrl:"https://cdn0.weddingwire.in/articles/images/7/2/9/6/img_6927/t30_indian-bridesmaid-dresses-abhinav-mishra.jpg"
    },
    {
        id:"8",
        collection:"Starts from ₹1000",
        heading:"Nikaah & Walima",
        imageUrl:"https://timesofindia.indiatimes.com/thumb/msid-75732452,width-1200,height-900,resizemode-4/.jpg"
    }
]

export default function Home() {
    return (
        <div className="home">            
            <CarouselContainer />
            <div className="home__body">
                {
                    tabsDb.map((tab) => {
                        return(
                            <Tabs collection={tab.collection} heading={tab.heading} imageUrl={tab.imageUrl} />
                        )
                    })
                }
            </div>
        </div>
    )
}
