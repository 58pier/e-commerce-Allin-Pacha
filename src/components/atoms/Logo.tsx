import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo_transparent.png';


const LogoContainer = styled.div`
    width: 33%;
`
const Img = styled.img`
    width: 60%;
`

const Logo = () => {
    return (
        <LogoContainer>
                <Link to='/'>
                    <Img src={LogoImage} alt="Logo"/>
                </Link>
        </LogoContainer>
    )
}

export default Logo