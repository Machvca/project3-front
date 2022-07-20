import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// We are deconstructing props object directly in the parentheses of the function
function ProductCard({ name, type, image, color,price, description,link }) {
	return (



<Card className='cards' style={{ width: '30rem' }} >
   <Card.Img variant="top" src={image} alt="img" />
      <Card.Body>
 <Card.Title>{name}</Card.Title>
   <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
 <ListGroup className="list-group-flush">
        <ListGroup.Item>TYPE: {type}</ListGroup.Item>
        <ListGroup.Item>AVAILABLE COLORS: {color}</ListGroup.Item>
        <ListGroup.Item>BEST PRICE: {price}€</ListGroup.Item>
      </ListGroup>

	     <Card.Body>
       
        <Button variant="outline-secondary" href={link}>BUY ME HERE!!</Button>
      </Card.Body>


</Card>









		









	);
}

export default ProductCard;

