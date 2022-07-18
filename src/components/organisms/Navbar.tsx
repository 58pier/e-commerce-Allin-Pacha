import styled from '@emotion/styled'
import Search from '../atoms/Search';
import MediumMenu from '../molecules/MediumMenu';
import NavIcons from '../molecules/NavIcons';
import { TopMenu } from '../molecules/TopMenu';

const Container = styled.div`
    padding-left: 60px;
    padding-right: 60px;
`

const Navbar = () => {
    return (
        <Container>
            <TopMenu/>
            <MediumMenu/>
        </Container>
    )
}

export default Navbar