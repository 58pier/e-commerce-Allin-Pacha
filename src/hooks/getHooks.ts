import { useState, useEffect } from 'react';
import { api } from '../api/apiConfig';
import { Product } from '../interfaces/ProductInteface';

interface getLimitProductsProps  {
    limit: number,
}
interface getCategoryProductsProps {
    category: string,
    limit?: number
}

export const getAllProducts = () => {

    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        api.get('products')
        .then(res => {
            setProducts(res.data);
        }).catch(err => console.log(err));
    }, []);
    return(products);
}
export const getLimitProducts = ({limit}:getLimitProductsProps) => {

    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        api.get('products?limit=' + limit)
        .then(res => {
            setProducts(res.data);
        }).catch(err => console.log(err));
    }, []);
    return(products);
}

export const getAllProductsByRating = ({limit}:getLimitProductsProps) => {

    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        (limit < 0 ? api.get('products'): api.get('products?limit=' + limit))
        .then(res => {
            res.data.sort((a:Product, b:Product) => {
                return   b.rating.rate -a.rating.rate;
            });
            setProducts(res.data);
        }).catch(err => console.log(err));
    }, []);


    return(products);
}

export const getCategoryProducts = ({category, limit=0}: getCategoryProductsProps) => {

    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        (limit < 0 ? api.get('products/category/'): api.get('products/category/'+encodeURI(category)+'?limit=' + limit))
        .then(res => {
            setProducts(res.data);
        }).catch(err => console.log(err));
    }, []);
    return(products);
}

