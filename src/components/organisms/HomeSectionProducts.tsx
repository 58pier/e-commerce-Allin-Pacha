import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import CardItem from '../atoms/ItemCard';
import GridProducts from '../molecules/GridProducts';

const Container = styled.div`
    margin: 5%;
`
const HomeGrid = () => {
    return (
        <Container>
            <GridProducts title='Lo más comprado'/>
            <GridProducts title='Verano / Invierno'/>
        </Container>
    )
}

export default HomeGrid