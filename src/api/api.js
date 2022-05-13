import * as axios from "axios";

export const getPost = async (limit = 10, page = 1) => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
               _limit: limit,
               _page: page
          }
     });
     return response;
}
export const getPostById = async (id) => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
     return response;
}
export const getCommentsById = async (id) => {
     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
     return response;
}

