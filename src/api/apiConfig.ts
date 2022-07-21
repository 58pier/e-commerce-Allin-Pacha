import axios from "axios";

const BASEURL = ('https://fakestoreapi.com/');


export const api = axios.create({
    baseURL: BASEURL,
});