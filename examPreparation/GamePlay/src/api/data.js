
import * as api from './api.js'



export const login = api.login;
export const register = api.register;
export const logout = api.logout;



export async function getGame(){
    return api.get('/data/games?sortBy=_createdOn%20desc');
}



export async function createGame(data){
    return api.post('/data/games', data)
}


export async function getGameById(id){
    return api.get('/data/games/' + id)
}


export async function deleteGame(id){
    return api.del('/data/games/' + id)
}

export async function editGameById(id, data){
    return api.put('/data/games/' + id , data)
}