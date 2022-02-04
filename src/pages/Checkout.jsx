import React from "react";
import OrderItem from "@components/OrderItem.jsx";
import AppContext from "../context/AppContext.js";

import '@styles/Checkout.scss'

const Checkout = ()=>{
    const { state, sumTotalCart, rebootCart } = React.useContext(AppContext);

    const orderMyItems = (items)=>{
        //por alguna razon no sirvio el hoock de addOrder por el momento se hace asi
       state.myOrders = [...state.myOrders, {total: sumTotalCart(), items : items, id: state.myOrders.length}];
       rebootCart();
        //console.log(state);
        //console.log(state.myOrders);
    }
    return(
        <div className="checkout">
            <div className="checkout__container">
                <h1 className="title">My order</h1>
                <div className="checkout__content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>     
                            <span> {state.cart.length} articles</span>
                        </p>
                        <p>${sumTotalCart()}</p>
                    </div>
                </div>
                {state.cart.map(product=>(
					<OrderItem product={product} key={`checkout-${product.id}`}/>
				))}
                <button 
                    className="primary-button"
                    onClick={()=> orderMyItems(state.cart)}
                    >
					Ordenar
				</button>
            </div>
        </div>
    );
}

export default Checkout;