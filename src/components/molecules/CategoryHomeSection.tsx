import styled from "@emotion/styled"
import { categoriesData } from "../../data/categoriesData";
import CategoryCard from '../atoms/CategoryCard';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
const CategoryHomeSection = () => {
    return (
        <Container>
            {
                categoriesData.map(
                    item => <CategoryCard key={item.id} item={item} />
                )
            }
        </Container>
    )
}

export default CategoryHomeSection