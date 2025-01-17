import service from './service';

const URL = '/products';

const getAllProductsService = () => {
	return service.get(`${URL}/`)};


const getAllMonitorsService = () => {
	return service.get(`${URL}/monitors`)};

const getProductService = (id) => {
	return service.get(`${URL}/find/`+id)};




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

	const deleteFavService = (deleteFav) => {
console.log(deleteFav)

	return service.post(`${URL}/deletefavorites`, deleteFav)};



	
const addProductService = (addNewProduct) => {
console.log(addNewProduct)

	return service.post(`${URL}/create`, addNewProduct)
};



const getOneProductById = (id) => {
	return service.get(`${URL}/${id}`)};

const getOneProductByIdd = (id) => {
	return service.get(`${URL}/find/${id}`)};








export { getAllProductsService,  getAllMonitorsService, getAllMousesService, getAllKeyboardsService, getAllChairsService, getAllMerchService, getAllSnacksService, getAllAccesoriesService, getAllHeadphonesService, addNewFavService, getAllFavoritesService, deleteFavService, addProductService, getOneProductById, getOneProductByIdd, getProductService }

