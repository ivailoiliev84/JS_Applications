import * as api from '../api/api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;



const endpoint = {
    allBook: '/data/books?sortBy=_createdOn%20desc'
}

export async function getBooks() {
    return api.get(endpoint.allBook)
}


export async function createBookPost(data){
    return api.post('/data/books', data)
}

export async function getBookById(id){
    return api.get('/data/books/' + id)

}

export async function deleteBook(id){
    return api.del('/data/books/' + id)
}

export function editBookBiId(id, data){
    return api.put('/data/books/' + id, data)
}

