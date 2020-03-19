import React, {useContext} from 'react';
// need to import use context and product context here
import {ProductContext} from '../Contexts/ProductContext';
// Components
import Product from './Product';

//Now that we ahave context we are going to remove props from this product component
// I am also goign to add the functionallity to use Product Context
const Products = () => {
	const {products, addItem} = useContext(ProductContext);
	return (

// now that i have the context here I can refactor and remove props form the return of this function
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
