import { useState, useEffect } from 'react';
import ProductCard from './../components/ProductCard';
import { getAllMousesService } from '../services/product.services';

function MousesPage() {
 

	const [ mouses, setMouses ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllMouses = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllMousesService();
			setMouses(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllMouses();
	}, []);

	return (
		<div className="MousesListPage">
			{/* <AddProject refreshProjects={getAllProjects} /> */}

			{loading && <div>Loading...</div>}
			 { !loading && mouses?.map((mouse) => <ProductCard key={mouse._id} {...mouse} />  )}  
		</div>
	);
}









export default MousesPage;