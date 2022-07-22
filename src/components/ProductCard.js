import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ name, type, image, color,price, description,link }) {
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


</div>




	);
}

export default ProductCard;

