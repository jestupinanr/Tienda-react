import React from "react";
import Order from "../components/Order.jsx";
import Orderitem from "../components/OrderItem.jsx";
import '@styles/Orders.scss';
import AppContext from "../context/AppContext.js";

const Orders = ()=>{
    const {state} = React.useContext(AppContext);
    const [showInfo, setShowInfo] = React.useState(false);

    return(
        <div className="myOrder">
        <div className="myOrder__container">
            <h1 className="title">My orders</h1>
            {!showInfo && <div className="myOrder__content">
                {state.myOrders.map((order, item)=> (<Order order={order} key={`orderItema-${item}`}/>))}
            </div>}
        </div>
    </div>
    );
} 

export default Orders;