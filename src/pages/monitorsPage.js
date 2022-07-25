import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getAllMonitorsService } from '../services/product.services';

function MonitorsPage() {
 

	const [ monitors, setMonitors ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllMonitors = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllMonitorsService();
			setMonitors(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllMonitors();
	}, []);

	return (


<div className='maindiv'>



			{loading && <div><span class="loader"></span></div>}
		    { !loading && monitors?.map((monitor) => <ProductCard key={monitor._id} {...monitor} />  )}  

</div>




	);
}



export default MonitorsPage;







