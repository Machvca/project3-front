import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ name, type, image, color,price, description,link }) {
	return (


<div className='card text-center bg-dark '>
<img src={image} alt="img" />
<div className='card-body'>

<h4 className='card-title'> {name}</h4>
<p className='card-text text-secondary'> {description}</p>
<p className='card-text text-secondary'>TYPE: {type}</p>
<p className='card-text text-secondary'> AVAILABLE COLORS: {color}</p>
<p className='card-text text-secondary'>BEST PRICE: {price}€</p>
 <a href={link} className="btn btn-outline-secondary ">BUY ME HERE!!</a>


</div>
</div>









		









	);
}

export default ProductCard;

