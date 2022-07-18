import styled from '@emotion/styled';

import Logo from '../atoms/Logo';
import NavIcons from '../molecules/NavIcons';

const Container = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const IconsContainer = styled.div`
    flex: 1;
`
const Center = styled.div`
flex: 1;
`

export const TopMenu = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <Center></Center>
            <IconsContainer>
                <NavIcons/>
            </IconsContainer>
        </Container>
    )
}
