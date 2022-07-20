import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material'
import CardItem from '../atoms/ItemCard';

interface GridProductsProps {
    title: string;
}


const Container = styled.div`
    margin-bottom: 80px;
`

const GridProducts = ({title}:GridProductsProps) => {
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
            <Grid container spacing={1} marginTop={4}>
                <Grid item xs={2}>
                    <CardItem />
                </Grid>
                <Grid item xs={2}>
                    <CardItem />
                </Grid>
                <Grid item xs={2}>
                    <CardItem />
                </Grid>
                <Grid item xs={2}>
                    <CardItem />
                </Grid>
                <Grid item xs={2}>
                    <CardItem />
                </Grid>
                <Grid item xs={2}>
                    <CardItem />
                </Grid>
            </Grid>
        </Container>
    )
}

export default GridProducts