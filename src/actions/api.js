import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';


export default {
    user(url = baseUrl + 'users') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id)
        }
    }
}