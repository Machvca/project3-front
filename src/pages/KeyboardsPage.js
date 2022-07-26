import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllKeyboardsService } from '../services/product.services';

function KeyboardsPage() {
 

	const [ keyboards, setKeyboards ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllKeyboards= async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllKeyboardsService();
			setKeyboards(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllKeyboards();
	}, []);

	return (
		<div className='maindiv'>
			{/* <AddProject refreshProjects={getAllProjects} /> */}

			{loading && <span class="loader"></span>}
			 { !loading && keyboards?.map((keyboard) => <ProductCard key={keyboard._id} {...keyboard} />  )}  
		</div>
	);
}



export default KeyboardsPage;