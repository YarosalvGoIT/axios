import apiInstance from '../services/api.js';

// TODOS

const getUsers = async () => {
    const res = await apiInstance.get('/users');
    console.log(res.data);
}

const getUserById = async (id) => {
    const res = await apiInstance.get(`/users/${id}`);
    console.log(res.data);
}

const getUsersByName = async (name) => {
    const res = await apiInstance.get(`/users/search?q=${name}`);
    console.log(res.data);
}

const getCartsByUserId = async (id) => {
    const res = await apiInstance.get(`/users/${id}/carts`);
    console.log(res.data);
}

const getPostsByUserId = async (id) => {
    const res = await apiInstance.get(`/users/${id}/posts`);
    console.log(res.data);
}

const getTodosByUserId = async (id) => {
    const res = await apiInstance.get(`/users/${id}/todos`);
    console.log(res.data);
}

const addUser = async () => {
const newUser = {
    firstName: 'Muhammad',
    lastName: 'Ovi',
    age: 250,
};

    const res = await apiInstance.post(`/users/add`, newUser);
    console.log(res.data);
}

export default {
    getUsers,
    getUserById,
    getUsersByName,
    getCartsByUserId,
    getPostsByUserId,
    getTodosByUserId,
    addUser,
}