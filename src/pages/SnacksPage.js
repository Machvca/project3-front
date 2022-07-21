import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllSnacksService } from '../services/product.services';

function SnacksPage() {
 

	const [ snacks, setSnacks ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllSnacks = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllMerchService();
			setSnacks(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllSnacks();
	}, []);

	return (
		<div className="SnacksListPage">
			{/* <AddProject refreshProjects={getAllProjects} /> */}

			{loading && <div>Loading...</div>}
			 { !loading && snacks?.map((snack) => <ProductCard key={snack._id} {...snack} />  )}  
		</div>
	);
}



export default MerchPage;
