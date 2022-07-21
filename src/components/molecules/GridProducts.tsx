import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material'
import { Product } from '../../interfaces/ProductInteface';
import CardItem from '../atoms/ItemCard';

interface GridProductsProps {
    title?: string;
    products: Product[];
}


const Container = styled.div`
    margin-bottom: 80px;
    width: 100%;
    position: relative;
`

const GridProducts = ({title="", products}:GridProductsProps) => {
    return (
        <Container>
            <Typography
                variant='h4'
                sx={{
                    fontWeight: '400',
                    fontVariantCaps: 'all-small-caps',
                }}
                gutterBottom
            >
                {title}
            </Typography>
            <Grid container spacing={1} marginTop={4} >
                {
                    products.map((product) => {
                        return(
                            <Grid item xs={2.4} key={product.id}>
                                <CardItem product={product} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default GridProducts