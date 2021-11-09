import React from 'react';
import "./OrderPage.css";
import Order from '../../component/Order/Order';
import Product from '../../component/Product/Product';
import Checkout from '../../component/Checkout/Checkout';

export default function OrderPage() {

    const productdb = [
        {
            id:"1",
            title:"Impressive Sky Blue Georgette Base Digital Printed Trendy Ruffle Saree",
            imageUrl:"https://kalkifashion.com.imgeng.in/media/catalog/product/f/u/fuchsia_pink_saree_in_organza_with_mirror_and_cut_dana_embroidered_buttis_and_border_design_online_-_kalki_fashion_2_.jpg",
            price:"5000",
            stock:"5"
        },
        // {
        //     id:"2",
        //     title:"White Color Georgette Base Designer Embroidery",
        //     imageUrl:"https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/d/i/digital-printed-georgette-saree-in-dark-green-v1-ssf10729.jpg",
        //     price:"3000",
        //     stock:"5"
        // },
        
    ]

    return (
        <div className="order__container">
            <div className="order__details">
                <div className="order__heading">PRODUCTS</div>
                {
                    productdb.map((product) => {
                        return(
                            <Order title={product.title} imageUrl={product.imageUrl} stock={product.stock} price={product.price} />
                        )
                    })
                }
            </div>
            <div className="order__checkout">
            <div className="order__heading">CHECKOUT</div>   
            <Checkout />
            </div>
        </div>
    )
}
