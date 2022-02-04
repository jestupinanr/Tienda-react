import React from "react";

const InitialState ={
    cart: [],
    myOrders:[],
}

const useInitialState = ()=>{
    const [state, setState] = React.useState(InitialState);

    const addToCart = (payload)=>{
        setState({
            ...state,
            cart : [...state.cart, payload]
        });
    };

    const removeFromCart = (payload)=>{
        setState({
            ...state,
            cart : state.cart.filter(items => items.id != payload.id),
        })
    };

    const sumTotalCart = ()=>{
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

    const addOrder = (payload)=>{
        console.log(payload);
        setState({
            ...state,
            myOrders : [...state.myOrders, payload]
        });
        console.log(state);
    };

    const rebootCart = ()=>{
        setState({
            ...state,
            cart : []
        })
    }


    return {
        state,
        addToCart,
        removeFromCart,
        sumTotalCart,
        addOrder,
        rebootCart,
    }
}


export default useInitialState;