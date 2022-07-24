import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import { addNewFavService } from '../services/product.services';
import { AuthContext } from './../context/auth.context';



// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ name, type, image, color, price, description, link, _id }) {
	const [ inputName, setInputName ] = useState(name);
	const [ inputType, setInputType ] = useState(type);
	const [ inputImage, setInputImage ] = useState(image);
	const [ inputColor, setInputColor ] = useState(color);
	const [ inputPrice, setInputPrice ] = useState(price);
	const [ inputDescription, setInputDescription ] = useState(description);
	const [ inputLink, setInputLink ] = useState(link);
	const {user} = useContext(AuthContext);
	const userId = user._id
	const handleSubmitFavs = async (e) => {
		try {
			const requestBody = { inputName, inputType, inputImage, inputColor, inputPrice, inputDescription, inputLink, _id, userId };
console.log(requestBody);
			await addNewFavService(requestBody);
		} catch (err) {
			console.log(err);
		}
	};

	return (

<div className='card-container'>

<div className='image-container'>
<img src={image} alt="img" />
</div>

<div className='card-content'>
<div className='card-title'>
<h3 > {name}</h3>
</div>
<div className='body-des'>
<p > {description}</p>
</div>

<div className='body-type'>
<p >TYPE: {type}</p>
</div>
<div className='body-color'>
<p > AVAILABLE COLORS: {color}</p>
</div>
<div className='body-price'>
<p >BEST PRICE: {price}€</p>
</div>

</div>


<button href={link} className="btn btn-outline-secondary ">BUY ME HERE!!
 </button>
 <button className="btn btn-outline-secondary" onClick={handleSubmitFavs}>Add to Favs</button>
</div>




	);
}

export default ProductCard;

