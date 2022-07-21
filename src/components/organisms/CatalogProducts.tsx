import React from 'react'
import GridProducts from '../molecules/GridProducts'
import { getAllProducts } from '../../hooks/getHooks';
import { useSearchParams } from 'react-router-dom';

const CatalogProducts = () => {
    
    const products = getAllProducts();


    return (
        <GridProducts products={products}/>
    )
}

export default CatalogProducts