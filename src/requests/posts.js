import apiInstance from '../services/api.js';

// POSTS

const getPosts = async () => {
    const res = await apiInstance.get('/posts');
    console.log(res.data);
}

const getPostById = async (id) => {
    const res = await apiInstance.get(`/posts/${id}`);
    console.log(res.data);
}

const getPostByContentKey = async (key) => {
    const res = await apiInstance.get(`/posts/search?q=${key}`);
    console.log(res.data);
}

const getPostComments = async (id) => {
    const res = await apiInstance.get(`/posts/${id}/comments`);
    console.log(res.data);
}

const addPost = async () => {
    const newPost = {
        title: 'I am in love with someone.',
        userId: 5,
    };

    const res = await apiInstance.post('/posts/add', newPost);
    console.log(res.data);
}

const updatePost = async (id) => {
    const res = await apiInstance.put(`/posts/${id}`, { title: 'I think I should shift to the moon' });
    console.log(res.data);
}

const deletePost = async (id) => {
    const res = await apiInstance.delete(`/posts/${id}`);
    console.log(res.data);
}

export default {
    getPosts,
    getPostById,
    getPostByContentKey,
    getPostComments,
    addPost,
    updatePost,
    deletePost,
}