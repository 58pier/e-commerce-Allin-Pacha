import { FavoriteBorder, PersonOutline, ShoppingBagOutlined } from '@mui/icons-material'

import { IconNav } from '../atoms/IconNav'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`


const NavIcons = () => {
    return (
        <Container>
                <MenuItem component={Link} to='/login'>
                    <IconNav text="Iniciar Sesión" Icon={PersonOutline} size="medium"/>
                </MenuItem>
                <MenuItem component={Link} to='#'>
                    <IconNav text="Favoritos" Icon={FavoriteBorder} size="medium" notification/>
                </MenuItem>
                <MenuItem component={Link} to='/cart'>
                    <IconNav text="Carrito de compras" Icon={ShoppingBagOutlined} size="medium" notification/>
                </MenuItem>
        </Container>
    )
}

export default NavIcons