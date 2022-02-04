import React from 'react';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from '../context/AppContext.js';
import '@styles/MyOrder.scss';
import { Link } from 'react-router-dom';

import arrow from '@icons/flechita.svg';

const MyOrder = () => {

	const { state, sumTotalCart } = React.useContext(AppContext);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product=>(
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotalCart()}</p>
				</div>
				<Link to="/checkout">
					<button className="primary-button">
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;