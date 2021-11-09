import React from "react";
import Filter from "../../component/Filter/Filter";
import Product from "../../component/Product/Product";
import "./ProductPage.css";

export default function ProductPage() {

    const productdb = [
        {
            id:"1",
            title:"White Color Georgette Base Designer Embroidery",
            imageUrl:"https://kalkifashion.com.imgeng.in/media/catalog/product/f/u/fuchsia_pink_saree_in_organza_with_mirror_and_cut_dana_embroidered_buttis_and_border_design_online_-_kalki_fashion_2_.jpg",
            price:"5000",
            stock:"5"
        },
        {
            id:"2",
            title:"White Color Georgette Base Designer Embroidery",
            imageUrl:"https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/d/i/digital-printed-georgette-saree-in-dark-green-v1-ssf10729.jpg",
            price:"3000",
            stock:"5"
        },
        {
            id:"2",
            title:"White Color Georgette Base Designer Embroidery",
            imageUrl:"https://media.istockphoto.com/photos/indian-woman-in-blue-georgette-saree-picture-id861958208?k=20&m=861958208&s=612x612&w=0&h=4z_u0FfMeEDDcpBZ2HHFClzKinrImDMXPCDlQ_xfhCo=",
            price:"3000",
            stock:"0"
        },
        {
            id:"2",
            title:"White Color Georgette Base Designer Embroidery",
            imageUrl:"https://5.imimg.com/data5/KR/PM/MY-33778102/women-banarasi-silk-kanjivaram-saree-28red-and-green-29-500x500.png",
            price:"3000",
            stock:"5"
        },
        {
            id:"2",
            title:"White Color Georgette Base Designer Embroidery",
            imageUrl:"https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/d/i/digital-printed-georgette-saree-in-dark-green-v1-ssf10729.jpg",
            price:"3000",
            stock:"5"
        },
        {
            id:"2",
            title:"White Color Georgette Base Designer Embroidery",
            imageUrl:"https://233e5r7tfnv3se11m26d4k8g-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/shutterstock_720115000-min.jpg",
            price:"3000",
            stock:"5"
        }
    ]

  return (
    <div className="product__page">
        <Filter />
        <div className="product__body">
        <div className="product__page__heading order__heading">
            SAREE
        </div>
        <div className="product__page__images">
        {
          productdb.map((product) => {
            return(
                <Product title={product.title} price={product.price} imageUrl={product.imageUrl} stock={product.stock} />
            );
          })
      }
        </div>
        </div>
    </div>
  );
}
