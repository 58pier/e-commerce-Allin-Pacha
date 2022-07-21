import styled from '@emotion/styled';
import { FormControl, Typography, FormGroup, TextField, Button } from '@mui/material';
import Navbar from '../organisms/Navbar';
const Container = styled.div`
    height: 80vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Wrapper = styled.div`
    width: 60vw;
    height: 50vh;
    margin-left: 300px;
    padding: 50px;
    display: flex;
    justify-content: space-between;
`
const LoginSection = styled.div`
    width: 350px;

    `
const InfoSection = styled.div`
    border: 0px 5px 5px solid #017172;
    width: 45%;
    height: 50%;
    border-left: 1px solid #017172;
    padding-left: 40px;
`

const Login = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <Wrapper>
                    <LoginSection>
                        <Typography
                            align='center'
                            variant='h4'
                            fontWeight={370}
                            fontSize={'23px'}
                            letterSpacing={'1px'}
                        >
                            Iniciar sesión con
                        </Typography>
                        <FormGroup
                            sx={{
                                height: '250px',
                                marginTop: '20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <TextField label="Correo Electronico" size='small' type="email" />
                            <TextField label="Contraseña" size='small' type="password" />
                            <Button
                                    variant='contained'
                                    size='medium'
                                    type='submit'
                                    sx={{
                                        width: '40%',
                                        backgroundColor: '#017172',
                                        '&:hover': {
                                            backgroundColor: '#7689e2'
                                        }
                                    }}
                                >
                                    Entrar
                                </Button>
                            <Typography variant='body1' fontSize={'15px'} fontWeight={300}> ¿Olvidaste tu contraseña? </Typography>
                        </FormGroup>
                    </LoginSection>
                    <InfoSection>
                        <Typography
                            variant='h4'
                            fontWeight={370}
                            fontSize={'23px'}
                            marginBottom={'20px'}
                        >
                            ¿La primera vez aquí?
                        </Typography>
                        <Typography fontWeight={300}>
                            » Rastreo de Pedidos Instantáneo
                        </Typography>
                        <Typography fontWeight={300}>
                            » Formas de pago
                        </Typography >
                        <Typography fontWeight={300}>
                            » Excelente Asistencia al Cliente
                        </Typography>
                        <Typography marginTop={'20px'} marginBottom={'20px'}>
                            ¡Registrate Ahora Fácil y Gratis!
                        </Typography>
                        <Button
                                    variant='contained'
                                    size='medium'
                                    sx={{
                                        width: '40%',
                                        backgroundColor: '#017172',
                                        '&:hover': {
                                            backgroundColor: '#7689e2'
                                        }
                                    }}
                                >
                                    Regístrate Ahora
                                </Button>
                    </InfoSection>
                </Wrapper>
            </Container>
        </>
    )
}

export default Login