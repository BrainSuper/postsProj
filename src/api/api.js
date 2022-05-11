import * as axios from "axios";

export const getPost = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data);
}