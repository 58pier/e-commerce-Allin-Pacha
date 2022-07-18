import styled from '@emotion/styled';

import Search from '../atoms/Search';

const Container = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MenuContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
`
const SearchContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`

const MediumMenu = () => {
    return (
        <Container>
            <MenuContainer> Menú </MenuContainer>
            <SearchContainer>
                <Search/>
            </SearchContainer>
        </Container>
    )
}

export default MediumMenu