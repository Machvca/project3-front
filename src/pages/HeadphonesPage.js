import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllHeadphonesService } from '../services/product.services';

function HeadphonesPage() {
 

	const [ headphones, setHeadphones ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllHeadphones= async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllHeadphonesService();
			setHeadphones(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllHeadphones();
	}, []);

	return (
		<div className='maindiv'>
			

			{loading && <span class="loader"></span>}
			 { !loading && headphones?.map((headphone) => <ProductCard key={headphone._id} {...headphone} />  )}  
		</div>
	);
}



export default HeadphonesPage;