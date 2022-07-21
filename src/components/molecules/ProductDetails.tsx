import styled from '@emotion/styled';
import { Add, Remove, ShoppingBag, FavoriteBorder } from '@mui/icons-material';
import { IconButton, Rating, Typography, Button, Paper } from '@mui/material';
import { fontWeight } from '@mui/system';

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

const ProductDetails = () => {
    return (
            <Paper elevation={5} sx={{marginTop: '20px'}}>
                <Container>
                    <ImageContainer>
                        <Image
                            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                            alt='Product'
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <Typography variant='h5' fontWeight={'bold'}> Product Name </Typography>
                        <RatingNumber>
                                        <Rating
                                            defaultValue={4.5}
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
                                            ({100} reviews)
                                        </Typography>
                                    </RatingNumber>
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dolorum in tempora necessitatibus illo quas reiciendis laborum autem exercitationem consequatur, non asperiores quod esse odio. Rem doloribus minus incidunt exercitationem.
                        </Typography>
                        <Typography variant='h4' color={'#4256ac'} fontWeight={'bold'} marginTop={5} >S/.800.00</Typography>
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