import * as api from './api.js';


const login = api.login;
const register = api.register;
const logout = api.logout;

export {
    login,
    register,
    logout
}


const endpoint = {
    all: '/data/memes?sortBy=_createdOn%20desc',
    create: '/data/memes'


}


export async function getMemes() {
    return api.get(endpoint.all)

}

export function create(meme) {
    return api.post('/data/memes', meme)

}

export function getMemeById(id) {
    return api.get('/data/memes/' + id)

}

export function editMeme(id, meme) {
    return api.put('/data/memes/' + id, meme)
}

export function deleteMeme(id) {
    return api.del('/data/memes/' + id)
    
}

