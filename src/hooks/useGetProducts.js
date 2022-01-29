import React from "react";
import axios from "axios";

const useGetProducts = (API)=>{
    const [products, setProduct] = React.useState([]);

    React.useEffect(async ()=>{
        const response = await axios(API);
        setProduct(response.data)

    }, []);

    return products;
};

export default useGetProducts;