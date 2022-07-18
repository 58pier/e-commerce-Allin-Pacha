import { FavoriteBorder, PersonOutline, ShoppingBagOutlined } from '@mui/icons-material'

import { IconNav } from '../atoms/IconNav'
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`


const NavIcons = () => {
    return (
        <Container>
            <IconNav text="Iniciar Sesión" Icon={PersonOutline} size="medium"/>
            <IconNav text="Favoritos" Icon={FavoriteBorder} size="medium" notification/>
            <IconNav text="Carrito de compras" Icon={ShoppingBagOutlined} size="medium" notification/>
        </Container>
    )
}

export default NavIcons