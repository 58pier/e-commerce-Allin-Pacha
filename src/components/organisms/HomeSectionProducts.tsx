import styled from '@emotion/styled';
import { getAllProducts } from '../../hooks/getHooks';
import GridProducts from '../molecules/GridProducts';
import { Product } from '../../interfaces/ProductInteface';

const Container = styled.div`
    margin: 5%;
`
const HomeGrid = () => {

    const products: Product[] = getAllProducts();

    return (
        <Container>
            <GridProducts title='Lo más comprado' products={products}/>
            <GridProducts title='Verano / Invierno' products={products}/>
        </Container>
    )
}

export default HomeGrid