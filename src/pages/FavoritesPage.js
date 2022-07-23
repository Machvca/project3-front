import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { addNewFavService, getAllFavoritesService } from '../services/product.services';

function FavoritesPage() {
 

	const [ favorites, setFavorites ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllFavorites = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllFavoritesService();
			setFavorites(response.data);
			console.log(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllFavorites();
	}, []);

	return (
    
        <div className='maindiv'>

        {loading && <div>Loading...</div>}
         { !loading && favorites?.map((favorite) => <ProductCard key={favorite._id} {...favorite} />  )}  
    </div>

);
}
export default FavoritesPage;
