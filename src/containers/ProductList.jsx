import React from "react";
import ProductItem from "@components/ProductItem.jsx";
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts.js'

const API = 'https://api.escuelajs.co/api/v1/products';

const ProducList = ({ category })=>{
    const products = useGetProducts(API);
    let items = [];

    const showItemIndicated =()=>{
            if(category > 0){
                products.map(product=>{
                    if(product.category.id == category){
                        items.push(product);
                    }
                })
             }else{
                products.map(product=>{
                    items.push(product);
                }) 
             }  
             return items; 
    }
    
   
    return(
        <section className="main-container">
            <div className="productList">
                {showItemIndicated().map(product=>(
                    <ProductItem product= {product} key={product.id}/>
                ))}
            </div>
        </section>
    );
}

export default ProducList;