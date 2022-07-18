import styled from '@emotion/styled';
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
                <Img src={LogoImage} alt="Logo"/>
        </LogoContainer>
    )
}

export default Logo