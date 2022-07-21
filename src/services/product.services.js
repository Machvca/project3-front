import service from './service';

const URL = '/products';

const getAllProductsService = () => {
	return service.get(`${URL}/`)};


const getAllMonitorsService = () => {
	return service.get(`${URL}/monitors`)};

const getAllMousesService = () => {
	return service.get(`${URL}/mouses`)};

const getAllKeyboardsService = () => {
	return service.get(`${URL}/keyboards`)};

const getAllChairsService = () => {
	return service.get(`${URL}/chairs`)};

const getAllMerchService = () => {
	return service.get(`${URL}/merchandising`)};

const getAllSnacksService = () => {
	return service.get(`${URL}/snacks`)};

const getAllAccessoriesService = () => {
	return service.get(`${URL}/accessories`)};

const getAllHeadphonesService = () => {
	return service.get(`${URL}/headphones`)};







export { getAllProductsService,  getAllMonitorsService, getAllMousesService, getAllKeyboardsService, getAllChairsService, getAllMerchService, getAllSnacksService }



//services // luego app.js en routes // luego hacer la page//