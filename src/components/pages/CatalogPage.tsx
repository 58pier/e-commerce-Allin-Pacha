import React from 'react'
import Navbar from '../organisms/Navbar';
import { getAllProducts } from '../../hooks/getHooks';
import { Grid } from '@mui/material';
import GridProducts from '../molecules/GridProducts';
import styled from '@emotion/styled';
import FilterSection from '../organisms/FilterSection';

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`
const ContainerFilter = styled.div`
    width: 15%;
    margin-right: 50px;
    margin-left: 50px;
`
const ContainerGrid = styled.div`
    width: 85%;
    max-width: 100%;
    margin-right: 50px;
    border: 1px solid black;
`

const CatalogPage = () => {
    const products = getAllProducts();
    console.log(products);
    return (
        <>
            <Navbar/>
            <Container>
                <ContainerFilter>
                    <FilterSection/>
                </ContainerFilter>
                <ContainerGrid>
                    <GridProducts products={products} title=""/>
                </ContainerGrid>
            </Container>
        </>
    )
}

export default CatalogPage