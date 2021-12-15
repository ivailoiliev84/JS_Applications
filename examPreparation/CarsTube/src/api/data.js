
import * as api from './api.js'



export const login = api.login;
export const register = api.register;
export const logout = api.logout;



export async function getCars() {
    return  api.get(`/data/cars?sortBy=_createdOn%20desc`)

}

export async function getCarById(id) {
    return api.get('/data/cars/' + id)
}


export async function editCarById(id, data){
    return api.put('/data/cars/' + id, data)
}


export function deleteCarById(id){
    return api.del('/data/cars/' + id)
}



