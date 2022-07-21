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





		<div className="container d-flex justify-content-center align-items-center h-100 bg-info ">
			<div className="row">
<div className="col-md-4">
			{loading && <div>Loading...</div>}
			 { !loading && monitors?.map((monitor) => <ProductCard key={monitor._id} {...monitor} />  )}  
		</div>
</div>
</div>


	);
}



export default MonitorsPage;







