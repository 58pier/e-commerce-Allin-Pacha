import styled from '@emotion/styled';
import { getAllProducts, getAllProductsByRating, getCategoryProducts } from '../../hooks/getHooks';
import GridProducts from '../molecules/GridProducts';
import { Product } from '../../interfaces/ProductInteface';

const Container = styled.div`
    margin: 5%;
`
const HomeGrid = () => {

    const ratedProducts: Product[] = getAllProductsByRating({limit:5});
    const jewerelyProducts: Product[] = getCategoryProducts({category: 'jewelery', limit: 5});

    return (
        <Container>
            <GridProducts title='Lo más comprado' products={ratedProducts}/>
            <GridProducts title='La mejor Joyeria' products={jewerelyProducts}/>
        </Container>
    )
}

export default HomeGrid