import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary, Typography, MenuItem, Button} from '@mui/material';

import { ExpandMore } from '@mui/icons-material';
import { getAllCategories } from '../../hooks/getHooks';
import { Link, useSearchParams } from 'react-router-dom';
const Container = styled.div`
    margin-top: 5px;
`
interface AcordionProps {
    setSearchParams: any;
}
const Acordion = () => {
    const [,setSearchParams] = useSearchParams();
    const handleClick = (event:any, category:string) => {
        setSearchParams({
            category: category
        })
    }

    const categories = getAllCategories();

    return (
        <Container>
            <Accordion sx={{
                borderBottom: '1px solid black',
                borderRadius: '0px'
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                >
                    <Typography
                        variant='h6'
                        sx={{
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                        }}
                    >
                        Categorias
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        categories.map( category => {
                            return (
                                <Button onClick={(e) => {handleClick(e,category)}}>
                                        {category.toUpperCase()}
                                </Button>

                            )
                        })
                    }
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default Acordion