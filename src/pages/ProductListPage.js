import { useState, useEffect } from 'react';
import AddProject from './../components/AddProject';
import ProductCard from './../components/ProductCard';
import { getAllProductsService } from '../services/product.services';


function ProductListPage() {
	const [ products, setProducts ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllProducts = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllProductsService();
			setProducts(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllProducts();
	}, []);

	return (
		<div className="ProjectListPage">
			{/* <AddProject refreshProjects={getAllProjects} /> */}
<h1>HOLA PERRAAA</h1>
			{loading && <div>Loading...</div>}
			 { !loading && products?.map((product) => <ProductCard key={product._id} {...product} />  )}  
		</div>
	);
}

export default ProductListPage;
