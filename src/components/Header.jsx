import React from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx';
import MyOrder from '@containers/MyOrder.jsx';
import AppContext from '../context/AppContext.js';
import menu from  '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCar from '@icons/icon_shopping_cart.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = React.useState(false);
    const [toggleOrders, setToggleOrders] = React.useState(false);
    const { state } = React.useContext(AppContext);

    const handleToggle = ()=>{
        setToggle(!toggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    
                    <li>
                      <Link to="/">All</Link>
                    </li>
                    <li>
                        <Link to="/c/clothes">Clothes</Link>
                    </li>
                    <li>
                        <Link to="/c/electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/c/furnitures">furnitures</Link>
                    </li>
                    <li>
                        <Link to="/c/toys">Toys</Link>
                    </li>
                    <li>
                        <Link to="/c/others">Other</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        prueba@gmail.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCar} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;