import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import { addNewFavService } from '../services/product.services';
import { AuthContext } from './../context/auth.context';
import {deleteFavService} from '../services/product.services'


// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ name, type, image, color, price, description, link, _id },setNewFavorites, newFavorites ) {

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



const handleDeleteFavs = async (e) => {
		try {
			const requestBody = {  _id, userId };
console.log(requestBody);
			await deleteFavService(requestBody);
		
window.location.reload()

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


<button href={link} className="btn btn-outline-secondary">BUY ME HERE!!
 </button>
 <button className="btn btn-outline-secondary" onClick={handleSubmitFavs}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart hearts" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button>


 <button className="btn btn-outline-secondary " onClick={handleDeleteFavs}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heartbreak hearts" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01c6.164-4.4 6.91-7.982 6.22-9.921C14.031 1.37 11.447.42 9.587 1.368L8.136 3.18l1.3 3.468a1 1 0 0 1-.104.906l-1.739 2.608.971 3.237Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06C.895 7.797.597 4.875 1.308 3.248c.756-1.73 2.768-2.577 4.456-2.127L4.732 2.36a1 1 0 0 0-.168.991L5.91 6.943l-1.305 2.61a1 1 0 0 0-.034.818l.442 1.106Z"/>
</svg></button>

<Link to= {`/products/${_id}`}>Mirate los detalles</Link>
</div>




	);
}

export default ProductCard;

