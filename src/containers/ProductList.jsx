import React from "react";
import ProductItem from "@components/ProductItem.jsx";
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts.js'

const API = 'https://api.escuelajs.co/api/v1/products';

const ProducList = ()=>{

    const products = useGetProducts(API);
    return(
        <section className="main-container">
            <div className="productList">
                {products.map(product=>(
                    <ProductItem product= {product} key={product.id}/>
                ))}
           
            </div>
        </section>
    );
}

export default ProducList;