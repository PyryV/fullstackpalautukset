import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const remove = (id) => {
    return axios.delete(baseUrl + '/' + id)
}

const update = (newObject) => {
    const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
    return request.then(response => response.data)
}


export default {
    getAll: getAll,
    create: create,
    remove: remove,
    update: update
}