import axios from 'axios';

const ITEM_API_BASE_URL = "http://localhost:9000/api/v1/items";

class ItemService {

    getItems(){
        return axios.get(ITEM_API_BASE_URL);
    }

    createItem(item){
        return axios.post(ITEM_API_BASE_URL, item);
    }

    getItemById(itemId){
        return axios.get(ITEM_API_BASE_URL + '/' + itemId);
    }

    updateItem(item, itemId){
        return axios.put(ITEM_API_BASE_URL + '/' + itemId, item);
    }

    deleteItem(itemId){
        return axios.delete(ITEM_API_BASE_URL + '/' + itemId);
    }
}

export default new ItemService();