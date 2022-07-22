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
import MonitorsPage from './pages/MonitorsPage';
import MousesPage from './pages/MousesPage';
import ChairsPage from './pages/ChairsPage';
import MerchPage from './pages/MerchPage';
import SnacksPage from './pages/SnacksPage';
import KeyboardsPage from './pages/KeyboardsPage';
import AccesoriesPage from './pages/AccesoriesPage';
import HeadphonesPage from './pages/HeadphonesPage';


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
					path="/products/monitors"
					element={
						<PrivateRoute>
						<MonitorsPage />	
						</PrivateRoute>
					}
				/>

			<Route
					exact
					path="/products/mouses"
					element={
						<PrivateRoute>
						<MousesPage />
							
						</PrivateRoute>
					}
				/>

			<Route
					exact
					path="/products/keyboards"
					element={
						<PrivateRoute>
						<KeyboardsPage />
							
						</PrivateRoute>
					}
				/>
			

			<Route
					exact
					path="/products/chairs"
					element={
						<PrivateRoute>
						<ChairsPage />
							
						</PrivateRoute>
					}
				/>
			
			<Route
					exact
					path="/products/merchandising"
					element={
						<PrivateRoute>
						<MerchPage />							
						</PrivateRoute>
					}
				/>

			<Route
					exact
					path="/products/snacks"
					element={
						<PrivateRoute>
						<SnacksPage />							
						</PrivateRoute>
					}
				/>

<Route
					exact
					path="/products/mouses"
					element={
						<PrivateRoute>
						<MousesPage />							
						</PrivateRoute>
					}
				/>


				<Route
					exact
					path="/products/accesories"
					element={
						<PrivateRoute>
						<AccesoriesPage />							
						</PrivateRoute>
					}
				/>

<Route
					exact
					path="/products/headphones"
					element={
						<PrivateRoute>
						<HeadphonesPage />							
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/projects/:id"
					element={
						<PrivateRoute>
							<ProjectDetailsPage />
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
		</div>
	);
}

export default App;
