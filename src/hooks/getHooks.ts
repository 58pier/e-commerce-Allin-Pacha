import { useState, useEffect } from 'react';
import { api } from '../api/apiConfig';
import { Product } from '../interfaces/ProductInteface';

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
