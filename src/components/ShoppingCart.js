import React, {useContext} from 'react';
// importing use context and cart context liek w did with product context 
// Components
import {CartContext} from '../Contexts/CartContext';
import Item from './ShoppingCartItem';

// below i am declaring car as the useContext CartContext data I can then remove props from this componenet.
const ShoppingCart = () => {
	const cart = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
