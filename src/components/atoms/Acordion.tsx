import styled from '@emotion/styled';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import { ExpandMore } from '@mui/icons-material';
const Container = styled.div`
    margin-top: 5px;
`

const Acordion = () => {
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
                    <Typography variant='body1'>
                        Women
                    </Typography>
                    <Typography variant='body1'>
                        Women
                    </Typography>
                    <Typography variant='body1'>
                        Women
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default Acordion