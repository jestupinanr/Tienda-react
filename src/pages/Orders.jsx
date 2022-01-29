import React from "react";
import Orderitem from "@components/OrderItem.jsx";
import '@styles/Orders.scss'

const Orders = ()=>{
    return(
        <div className="myOrder">
        <div className="myOrder__container">
            <h1 className="title">My orders</h1>
            <div className="myOrder__content">
               <Orderitem />
            </div>
        </div>
    </div>
    );
} 

export default Orders;