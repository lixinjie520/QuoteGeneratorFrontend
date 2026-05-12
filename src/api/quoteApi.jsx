import axios from "axios";


const BASE_URL = "http://localhost:8080/api/v1/quotes";

export const getAllQuotes = () => {
    return axios.get(BASE_URL);
}

export const getQuoteById = (id) => {
    return axios.get(`${BASE_URL}/${id}`);
}

export const createQuote = (quoteData) => {
    return axios.post(BASE_URL, quoteData);
}

export const updateQuote = (id, quoteData) => {
    return axios.put(`${BASE_URL}/${id}`, quoteData);
}

export const deleteQuote = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
}

export const searchQuotesByKeyword = (keyword) => {
    return axios.get(`${BASE_URL}?keyword=${keyword}`);
}

export const getQuotesByCategory = (category) => {
    return axios.get(`${BASE_URL}?category=${category}`);
}