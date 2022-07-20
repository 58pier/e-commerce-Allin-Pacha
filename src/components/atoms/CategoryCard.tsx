import styled from "@emotion/styled"
import { Typography } from "@mui/material"

interface CategoryCardProps {
    item: {
        id: number,
        title: string,
        image: string,
    }
}

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
    cursor: pointer;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`
const CategoryCard = ({item}:CategoryCardProps) => {
    return (
        <Container>
            <Image src={item.image}/>
            <Info>
                <Typography
                    variant="h2"
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {item.title}
                </Typography>
            </Info>
        </Container>
    )
}

export default CategoryCard