import { Link } from 'react-router-dom';


// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ name, type, image, color,price, description,link, _id }) {
	return (
		<div className="ProductCard card">
			<Link to={`/products`}>
				<h3>{name}</h3>
			</Link>
			<p>id: {_id}</p>
			<p>Type: {type}</p>
			<img src={image} alt="img"/>
			<p>Color: {color}</p>
			<p>Price: {price}</p>
			<p>Link: {link}</p>
			<p style={{ maxWidth: '800px' }}>{description} </p>
		</div>
	);
}

export default ProductCard;
