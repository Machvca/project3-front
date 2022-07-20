import service from './service';

const URL = '/products';

const getAllProductsService = () => {
	return service.get(`${URL}/`)};

export { getAllProductsService }