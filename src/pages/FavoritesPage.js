import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { addNewFavService, getAllFavoritesService } from '../services/product.services';

function FavoritesPage() {

	const [ favorites, setFavorites ] = useState([]);
	const [ loading, setLoading ] = useState(true);
    const [newFavorites, setNewFavorites] = useState(true);
	const getAllFavorites = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllFavoritesService();
			setFavorites(response.data[0].favorites);
			console.log(response.data);
				console.log(response.data[0].favorites);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllFavorites();
	}, [newFavorites]);

return (
    
<div className='maindiv'>

{loading && <div><span class="loader"></span></div>}

{ !loading && favorites?.map((favorite) => <ProductCard setNewFavorites ={setNewFavorites} newFavorites = {newFavorites} key={favorite._id} {...favorite} />  )}  

</div>

);
}
export default FavoritesPage;
