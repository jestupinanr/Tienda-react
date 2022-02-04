import React from 'react';
import '@styles/Order.scss';

import arrow from '@icons/flechita.svg';

const Order = ({ order, key }) => {
	console.log(order);

	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>{order.items.length} articles</span>
			</p>
			<p>${order.total}</p>
			<img src={arrow} alt="arrow" />
		</div>
	);
}

export default Order;