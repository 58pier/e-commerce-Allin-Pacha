import styled from '@emotion/styled';
import { Add, Remove, ShoppingBag, FavoriteBorder } from '@mui/icons-material';
import { IconButton, Rating, Typography, Button, Paper } from '@mui/material';
import { fontWeight } from '@mui/system';
import { Product } from '../../interfaces/ProductInteface';

interface ProductDetailsProps {
    product: Product;
}

const Container = styled.div`
    display: flex;
    padding: 70px;
`

const ImageContainer = styled.div`
    width: 70%;
    flex: 1;
    height: 60vh;
    background-color: #242639;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
const InfoContainer = styled.div`
    padding: 0 50px;
    width: 30%;
`
const RatingNumber = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px 30px;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const ProductDetails = ({product}:ProductDetailsProps) => {
    return (
            <Paper elevation={5} sx={{marginTop: '20px'}}>
                <Container>
                    <ImageContainer>
                        <Image
                            src={product.image}
                            alt={product.title}
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <Typography variant='h5' fontWeight={'bold'}> {product.title} </Typography>
                        <RatingNumber>
                                        <Rating
                                            defaultValue={product.rating.rate}
                                            readOnly
                                            precision={0.5}
                                            size="small"
                                            sx={{
                                                mr: '10px',
                                                color: 'black'
                                            }}
                                        />
                                        <Typography
                                            variant='body2'
                                            sx={{
                                                fontWeight: '500',
                                                letterSpacing: '0.5px',
                                                textDecoration: 'underline',
                                            }}
                                        >
                                            ({product.rating.count} reviews)
                                        </Typography>
                                    </RatingNumber>
                        <Typography variant='body1'>
                            {product.description}
                        </Typography>
                        <Typography variant='h4' color={'#4256ac'} fontWeight={'bold'} marginTop={5} >S/.{product.price}</Typography>
                        <ButtonsContainer>
                            <Button
                                variant='contained'
                                size="medium"
                                sx={{
                                    height: '50px',
                                    width: '85%',
                                    m: '50px 0px',
                                    p: '30px',
                                    backgroundColor: '#4256ac',
                                    '&:hover': {
                                        backgroundColor: '#4256ac',
                                        transform: 'scale(1.05)',
                                    }
                                }}
                                startIcon={<ShoppingBag/>}
                            >
                                Añadir al carrito
                            </Button>
                            <IconButton aria-label='favorite' sx={{
                                height: '60px',
                                padding: '20px',
                                borderRadius: '0%',
                            }}>
                                <FavoriteBorder/>
                            </IconButton>
                        </ButtonsContainer>
                    </InfoContainer>
                </Container>
            </Paper>
    )
}

export default ProductDetails