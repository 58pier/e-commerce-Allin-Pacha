import Navbar from "../organisms/Navbar"
import styled from '@emotion/styled';
import { Input, Link, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, Button } from '@mui/material';

type SectionDetailsPriceProps = {
    lineaSuperior?: boolean,
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    margin-top: 30px;
    width: 75%;
    height: 80vh;
`
const CartSection = styled.div`
    display: flex;
    width: 100%;
`
const DetailsSection = styled.div`
    width: 22%;
    border: 1px solid #ccc;
    margin-left: 25px;
    margin-top: 30px;
    padding: 25px;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
`
const ProductSection = styled.div`
    width: 500px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
`
const ImageProduct = styled.img`
    width: 20%;`
const ProductDetails = styled.div`
    width: 80%;
    margin-left: 20px;
`
const SectionDetailsPrice = styled.div<SectionDetailsPriceProps>`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
    border-top: ${props => props.lineaSuperior ? '1px solid #ccc' : 'none'};
`

const CartPage = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Typography variant='h4' fontSize={'22px'} fontWeight={370} marginLeft={2}>
                        CARRO DE COMPRAS
                    </Typography>
                    <CartSection>
                        <Table>
                            <TableHead sx={{border: '0px'}}>
                                <TableRow >
                                    <TableCell></TableCell>
                                    <TableCell align="right">Cantidad</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">SubTotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell >
                                        <ProductSection>
                                            <ImageProduct
                                                src="https://storage.googleapis.com/sspe-blnc-rscs/00000C8C/JPG/2010218841_MUJER_SPORT_LARGO_1.jpg"
                                            />
                                            <ProductDetails>
                                                <Typography variant='h5' fontSize={'17px'} fontWeight={350} marginBottom={1}>
                                                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                                                </Typography>
                                                <Link>Eliminar</Link>
                                            </ProductDetails>
                                        </ProductSection>
                                    </TableCell>
                                    <TableCell align="center"  >
                                        <Input type="number" value={5} style={{width: '40px'}}/>
                                    </TableCell>
                                    <TableCell align="center" > 5 </TableCell>
                                    <TableCell align="center"> 5 </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >
                                        <ProductSection>
                                            <ImageProduct
                                                src="https://storage.googleapis.com/sspe-blnc-rscs/00000C8C/JPG/2010218841_MUJER_SPORT_LARGO_1.jpg"
                                            />
                                            <ProductDetails>
                                                <Typography variant='h5' fontSize={'17px'} fontWeight={350} marginBottom={1}>
                                                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                                                </Typography>
                                                <Link>Eliminar</Link>
                                            </ProductDetails>
                                        </ProductSection>
                                    </TableCell>
                                    <TableCell align="center"  >
                                        <Input type="number" value={5} style={{width: '40px'}}/>
                                    </TableCell>
                                    <TableCell align="center" > 5 </TableCell>
                                    <TableCell align="center"> 5 </TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={2}></TableCell>
                                    <TableCell colSpan={2}>
                                        <Typography align="right">
                                            Subtotal $482
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                        <DetailsSection>
                            <SectionDetailsPrice>
                                <Typography width={5} fontWeight={350}>Precio Regular</Typography>
                                <Typography fontWeight={370}>$ 379.00</Typography>
                            </SectionDetailsPrice>
                            <SectionDetailsPrice>
                                <Typography width={5} fontWeight={350}>Descuento</Typography>
                                <Typography fontWeight={370}>$ 0.00</Typography>
                            </SectionDetailsPrice>
                            <SectionDetailsPrice lineaSuperior>
                                <Typography marginTop={2} width={'100px'} fontWeight={350}>Precio con descuento</Typography>
                                <Typography fontWeight={370}>$ 379.00</Typography>
                            </SectionDetailsPrice>
                            <Button variant="contained" sx={{marginTop: '10px', backgroundColor: '#017172' , '&:hover': {
                                        backgroundColor: '#7689e2'
                            }}}>
                                Ir a Pagar
                            </Button>
                        </DetailsSection>
                    </CartSection>
                </Wrapper>
            </Container>
        </>
    )
}

export default CartPage