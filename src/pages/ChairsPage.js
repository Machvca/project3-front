import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllChairsService } from '../services/product.services';

function ChairsPage() {
 

	const [ chairs, setChairs ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllChairs = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllChairsService();
			setChairs(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllChairs();
	}, []);

	return (
		<div className="ChairsListPage">
			{/* <AddProject refreshProjects={getAllProjects} /> */}

			{loading && <div>Loading...</div>}
			 { !loading && chairs?.map((chair) => <ProductCard key={chair._id} {...chair} />  )}  
		</div>
	);
}



export default ChairsPage;
