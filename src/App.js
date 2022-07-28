import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import FilteredProductsPage from './pages/Filterproductspage.jsx'
import MonitorsPage from './pages/MonitorsPages';
import MousesPage from './pages/MousesPage';
import ChairsPage from './pages/ChairsPage';
import MerchPage from './pages/MerchPage';
import SnacksPage from './pages/SnacksPage';
import KeyboardsPage from './pages/KeyboardsPage';
import AccesoriesPage from './pages/AccesoriesPage';
import HeadphonesPage from './pages/HeadphonesPage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import AddProduct from './components/Addnewproduct';
import ProductPage from './pages/ProductPage';



function App() {
	return (
		<div className="App">

<Navbar />

	<Routes>

			<Route exact path="/" element={<HomePage />} />

			<Route
				exact
				path="/products"
				element={
						<PrivateRoute>
							<FilteredProductsPage />
						</PrivateRoute>
					}
				/>


<Route
				exact
				path="/product/:id"
				element={
						<PrivateRoute>
							<ProductPage/>
						</PrivateRoute>
					} 
				/>




			<Route
				exact
				path="/products/monitors"
				element={
						<PrivateRoute>
							<Searchbar />
							<MonitorsPage />	
						</PrivateRoute>
					}
				/>

			<Route
				exact
				path="/products/mouses"
				element={
						<PrivateRoute>
							<Searchbar />
							<MousesPage />	
						</PrivateRoute>
					}
				/>

			<Route
				exact
				path="/products/keyboards"
				element={
						<PrivateRoute>
							<Searchbar />
							<KeyboardsPage />
						</PrivateRoute>
					}
				/>
			
			<Route
				exact
				path="/products/chairs"
				element={
						<PrivateRoute>
							<Searchbar />
							<ChairsPage />
						</PrivateRoute>
					}
				/>
			
			<Route
				exact
				path="/products/merchandising"
				element={
						<PrivateRoute>
							<Searchbar />
							<MerchPage />							
						</PrivateRoute>
					}
				/>

			<Route
				exact
				path="/products/snacks"
				element={
						<PrivateRoute>
							<Searchbar />
							<SnacksPage />							
						</PrivateRoute>
					}
				/>

			<Route
				exact
				path="/products/mouses"
				element={
						<PrivateRoute>
							<Searchbar />
							<MousesPage />							
						</PrivateRoute>
					}
				/>

			<Route
				exact
				path="/products/accesories"
				element={
						<PrivateRoute>
							<Searchbar />
							<AccesoriesPage />							
						</PrivateRoute>
					}
				/>

			<Route
				exact
				path="/products/headphones"
				element={
						<PrivateRoute>
							<Searchbar />
							<HeadphonesPage />							
						</PrivateRoute>
					}
				/>
			
			<Route
				exact
				path="/products/add-favorite"
				element={
						<PrivateRoute>
							<FavoritesPage />							
						</PrivateRoute>
					}
				/>

	<Route
				exact
				path="/products/add-product"
				element={
						<PrivateRoute>
							<AddProduct />							
						</PrivateRoute>
					}
				/>




			<Route
				exact
				path="/products/:id"
				element={
						<PrivateRoute>
						
						</PrivateRoute>
					}
				/>

			<Route
				exact
				path="/signup"
				element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>

			<Route
				exact
				path="/login"
				element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
