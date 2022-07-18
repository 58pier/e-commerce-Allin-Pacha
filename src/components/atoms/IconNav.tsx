import React from 'react'
import styled from '@emotion/styled';
import { Badge } from '@mui/material';

//TODO: Correct Type in IconNav component

interface IconProps{
    fontSize?: 'small' | 'medium' | 'large',
    color?: string,
}

interface props {
    text: string,
    Icon: React.FC<any>,
    size:'small' | 'medium' | 'large',
    notification? : boolean
}

const Container = styled.div`
    padding: 5px;
    align-items: center;
    display: flex;
`
const Nav = styled.nav`
    margin-left: 8px;
`

export const IconNav = ( {text,Icon,size, notification = false}:props ) => {
    return (
        <Container>
            {
                notification ? (
                        <>
                            <Badge  badgeContent={4} >
                                <Icon fontSize={size} />
                            </Badge>
                            <Nav> {text} </Nav>
                        </>
                ) :
                (
                    <>
                        <Icon fontSize={size} />
                        <Nav> {text} </Nav>
                    </>
                )
            }
        </Container>
    )
}
