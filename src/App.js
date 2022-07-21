import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import ProductListPage from './pages/ProductListPage';
import FilteredProductsPage from './pages/Filterproductspage.jsx'
import MonitorsPage from './pages/monitorsPage';
import MousesPage from './pages/MousesPage';

function App() {
	return (
		<div className="App">
			<Navbar />


<HomePage />

			<Routes>
				<Route exact path="/" component={HomePage} />
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
