import service from './service';

const URL = '/products';

const getAllProductsService = () => {
	return service.get(`${URL}/`)};


const getAllMonitorsService = () => {
	return service.get(`${URL}/monitors`)};


	const getAllMousesService = () => {
	return service.get(`${URL}/mouses`)};









export { getAllProductsService,  getAllMonitorsService, getAllMousesService}



//services // luego app.js en routes // luego hacer la page//