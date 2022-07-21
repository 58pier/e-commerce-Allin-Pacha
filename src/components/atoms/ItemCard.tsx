import { Card, CardActionArea, CardContent, CardMedia, Paper, Rating, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { red } from '@mui/material/colors';
import { FavoriteBorder } from '@mui/icons-material';
import { Product } from '../../interfaces/ProductInteface';

interface CardItemProps {
    product: Product;
}

const Container = styled.div`
    border-color: #e0e0e0;
    height: 450px;
    width: 100%;
    min-height: 450px;
`
const RatingNumber = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const CardItem = ({product}:CardItemProps) => {
    return (
        <Container>
            <Paper elevation={1} >
                <Card sx={{
                '&:hover': {
                    border: '0.5px solid #e0e0e0',
                    transition: "all 0.5s ease",
                },
                width: '100%',
                height: '420px',
                minHeight: '410px',
            }} >
                    <CardActionArea
                        sx={{
                            p: "10px",
                            justifyContent: "end",
                        }}
                    >
                        <FavoriteBorder 
                            fontSize='small'
                            titleAccess='Agregar a favoritos'
                            sx={{
                                '&:hover': {
                                    color: '#e0e0e0',
                                },
                                float: 'right',
                                mb: "5px"
                            }}
                        />
                        <CardMedia
                            component="img"
                            height="230"
                            image={product.image}
                            alt="Camisa hombre"
                            title='Ver detalles del producto'
                            sx={{
                                '&:hover': {
                                    transform: "scale(1.05)",
                                    transition: "all 0.5s ease",
                                },
                            }}
                        />
                        <CardContent>
                            <Typography
                                variant='h6'
                                component="div"
                                sx={{
                                    fontWeight: '450',
                                    fontSize: '1rem',
                                }}
                            >
                                {product.title.slice(0,15)}
                            </Typography>
                            <Typography
                                variant='body2'
                                gutterBottom
                                sx={{
                                    fontWeight: '500',
                                    fontSize: '0.8rem',
                                    height: '2%',
                                    maxHeight: '400px',
                                }}
                            >
                                {product.description.slice(0,40)}
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                align='right'
                                gutterBottom
                                sx={{
                                    fontWeight: '450',
                                    color: '#4256ac',
                                    fontStyle: 'italic',
                                }}
                            >
                                S/.{product.price}
                            </Typography>
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
                                    }}
                                >
                                    {product.rating.count}
                                </Typography>
                            </RatingNumber>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        </Container>
    )
}

export default CardItem