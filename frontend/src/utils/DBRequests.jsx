import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const login = async ({ email, password }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            email,
            password,
        });
        //console.log(response);
        return response;
    } catch (error) {
        console.log(error.response.data)
        throw new Error(error.response.data.msg);
    }
};

export const logout = async () => {
    return await axios.post(`${API_BASE_URL}/auth/logout`, {});
};

export const register = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
        return response;
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data.error);
    }
};

export const getAllBooks = async (limit, skip, token, query = '', filters = {}, sort) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`, {
            headers: { Authorization: `Bearer ${token}` }, 
            params: {
                limit,
                skip,
                query, //search
                //filters
                ageCategory: filters.ageCategory.join(',') || '', 
                status: filters.status.join(',') || '', 
                genre: filters.genre.join(',') || '', 
                sort
            }
        });
        return response;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
};

export const getSingleBook = async (token, bookId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books/${bookId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}

export const addBook = async (token, data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/books`, data,
            {
                headers: {
                    'Content-Type': 'application/json',//
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log(error.response.data.msg)
        throw new Error(error.response.data.msg);
    }
};

export const editBook = async (token, data, bookId) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/books/${bookId}`, data,
            {
                headers: {
                    'Content-Type': 'application/json',//
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
};

export const deleteBook = async (token, bookId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/books/${bookId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};