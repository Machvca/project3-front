import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { addNewFavService } from '../services/product.services';



// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ name, type, image, color, price, description, link, _id }) {
	const [ inputName, setInputName ] = useState(name);
	const [ inputType, setInputType ] = useState(type);
	const [ inputImage, setInputImage ] = useState(image);
	const [ inputColor, setInputColor ] = useState(color);
	const [ inputPrice, setInputPrice ] = useState(price);
	const [ inputDescription, setInputDescription ] = useState(description);
	const [ inputLink, setInputLink ] = useState(link);
	const userId = _id;

	const handleSubmitFavs = async (e) => {
		try {
			const requestBody = { name, type, image, color, price, description, link, _id };

			await addNewFavService(userId, requestBody);
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
<h4 > {name}</h4>
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


<button>
 <a href={link} className="btn btn-outline-secondary ">BUY ME HERE!!</a>
 </button>
 <button onClick={handleSubmitFavs}>Add to Favs</button>
</div>




	);
}

export default ProductCard;

