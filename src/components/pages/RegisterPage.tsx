import styled from '@emotion/styled';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import Navbar from '../organisms/Navbar';


const Container = styled.div`
    height: 120vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url('https://www.esdesignbarcelona.com/sites/default/files/imagenes/cultura-de-moda-que-es_1.jpg')
    center;
    display: flex;
    align-items: center;
    justify-content: center;
    `
const Wrapper = styled.div`
    margin-top: 30px;
    padding: 20px;
    width: 40%;
    background-color: white;
    height: 90vh;
`
const FormContainer= styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    height: 80vh;
`
const RegisterPage = () => {

    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Typography variant="h3" fontWeight={350} fontSize={'1.9rem'} marginLeft={'50px'}>
                        REGISTRO
                    </Typography>
                    <FormContainer>
                        <FormGroup
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <TextField label="Nombres" />
                            <TextField label="Apellidos" />
                            <TextField label="Celular" />
                            <TextField label="Nombre de Usuario" />
                            <TextField label="Correo Electrónico" />
                            <TextField label="Contraseña" />
                            <TextField label="Confirmar contraseña" />
                            <FormControlLabel control={<Checkbox />} label="Al crear una cuenta yo autorizo el procesamiento de mis datos personales."  />
                            <Button
                                variant='contained'
                                size='large'
                                sx={{
                                    backgroundColor: '#017172',
                                    '&:hover': {
                                        backgroundColor: '#7689e2'
                                    }
                                }}
                            >
                                Registrame
                            </Button>
                        </FormGroup>
                    </FormContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default RegisterPage