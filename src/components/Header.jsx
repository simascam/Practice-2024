import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

const showOrders = (orders, onDelete) => {
    let sum = 0
    orders.forEach(el => sum += Number.parseFloat(el.price))
    return(<div>
        {orders.map(el => (
        <Order key={el.id} item={el} onDelete={onDelete} />
        ))}
        <p className='sum'>Total price: {new Intl.NumberFormat().format(sum)}$</p>
    </div>);
};

const showNothing = () => {
    return(<div className='empty'>
        <h2>Cart is empty</h2>
    </div>
    )
}

const Header = ({orders, onDelete}) => {
    const [cartOpen, setCartOpen] = useState(false)

    function toggleCart () {
        setCartOpen(cartOpen => !cartOpen)
    }

    return (
        <header>
            <div> 
                <span className='logo'>House staff</span>
                <ul className='nav'>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Cabinet</li>
                </ul>
                <FaShoppingCart onClick={toggleCart} className={`shop-cart-button ${cartOpen && 'active'}`}/> 

                {cartOpen && (
                     <div className='shop-cart'>
                         {orders.length > 0 ?
                            showOrders(orders, onDelete) : showNothing()}
                 </div> 
                )}
            </div>
            <div className='presentation'></div>
        </header>
  )
}

export default Header;