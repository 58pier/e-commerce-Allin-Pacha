import styled from '@emotion/styled';
import FilterListIcon from '@mui/icons-material/FilterList';
import RemoveIcon from '@mui/icons-material/Remove';
import Acordion from '../atoms/Acordion';

import { IconNav } from '../atoms/IconNav';

//TODO: refactor this component
interface FilterSectionProps {
    setSearchParams: any;
}

const Container = styled.div`
    width: 100%;
    flex: 1;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`
const AcordionSection = styled.div`

`

const FilterSection = () => {
    return (
        <Container>
            <Header>
                <IconNav Icon={FilterListIcon} size={'small'} text="Filtros" bold />
                <IconNav Icon={RemoveIcon} size={'small'} text="Colapsar" directionIcon="right" />
            </Header>
            <AcordionSection>
                <Acordion />
            </AcordionSection>
        </Container>
    )
}

export default FilterSection