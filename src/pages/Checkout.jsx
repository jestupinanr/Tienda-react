import React from "react";
import Orderitem from "@components/OrderItem.jsx";
import '@styles/Checkout.scss'

const Checkout = ()=>{
    return(
        <div className="checkout">
            <div className="checkout__container">
                <h1 className="title">My order</h1>
                <div className="checkout__content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>     
                            <span>  6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                </div>
                <Orderitem />
            </div>
        </div>
    );
}

export default Checkout;