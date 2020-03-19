import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// import the ProductContext and CartContext so that I can have the data here
import {ProductContext} from './Contexts/ProductContext.js';
import {CartContext} from './Contexts/CartContext.js';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {

		/// spreading the current cart state and adding the new item to the end of the array
		setCart([...cart,item]);
	};


	// I know ned to wrap the product and cart context around the return where i need to pass the 
	//data from the created contexts
	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
