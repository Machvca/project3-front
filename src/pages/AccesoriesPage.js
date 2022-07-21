import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllAccesoriesService } from '../services/product.services';

function AccesoriesPage() {
 

	const [ accesories, setAccesories ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllAccesories= async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllAccesoriesService();
			setAccesories(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllAccesories();
	}, []);

	return (
		<div className="AccesoriesListPage">
			{/* <AddProject refreshProjects={getAllProjects} /> */}

			{loading && <div>Loading...</div>}
			 { !loading && accesories?.map((accesorie) => <ProductCard key={accesorie._id} {...accesorie} />  )}  
		</div>
	);
}



export default AccesoriesPage;