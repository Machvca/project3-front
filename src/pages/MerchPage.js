import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllMerchService } from '../services/product.services';

function MerchPage() {
 

	const [ merchandising, setMerch ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllMerch = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllMerchService();
			setMerch(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllMerch();
	}, []);

	return (
		<div className='maindiv'>
			{/* <AddProject refreshProjects={getAllProjects} /> */}

			{loading && <div><span class="loader"></span></div>}
			 { !loading && merchandising?.map((merch) => <ProductCard key={merch._id} {...merch} />  )}  
		</div>
	);
}



export default MerchPage;
