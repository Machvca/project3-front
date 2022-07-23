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

const getAllAccesoriesService = () => {
	return service.get(`${URL}/accesories`)};

const getAllHeadphonesService = () => {
	return service.get(`${URL}/headphones`)};

	
const addNewFavService = (newFav) => {
	return service.post(`${URL}/add-favorite`, newFav);};
// trying to implement favs view
const getAllFavoritesService = () => {
	return service.get(`${URL}/favorites`)};






export { getAllProductsService,  getAllMonitorsService, getAllMousesService, getAllKeyboardsService, getAllChairsService, getAllMerchService, getAllSnacksService, getAllAccesoriesService, getAllHeadphonesService, addNewFavService, getAllFavoritesService }

