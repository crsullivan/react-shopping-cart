import React, { useContext } from 'react';
import {CartContext} from '../contexts/CartContexts';
import removeItem from '../App';

const Item = props => {

	
	console.log(props)
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props.id)}>
				Remove From Cart
				</button>
			</div>
		</div>
	);
};

export default Item;
