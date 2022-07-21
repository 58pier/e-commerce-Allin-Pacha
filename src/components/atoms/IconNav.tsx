import React from 'react'
import styled from '@emotion/styled';
import { Badge } from '@mui/material';

//TODO: Correct Type in IconNav component

interface IconProps{
    fontSize?: 'small' | 'medium' | 'large',
    color?: string,
}
type NavProps ={
    bold?: boolean,
}

interface props {
    text: string,
    Icon: React.FC<any>,
    size:'small' | 'medium' | 'large',
    notification? : boolean,
    bold?: boolean,
    directionIcon?: 'left' | 'right',
}

const Container = styled.div`
    padding: 5px;
    align-items: center;
    display: flex;
`
const Nav = styled.nav<NavProps>`
    margin-left: 4px;
    font-weight: ${(props) => { if(props.bold) return "bold"}};
    font-size: 14px;
`

export const IconNav = ( {text,Icon,size, notification = false, bold = false, directionIcon ="left"}:props ) => {
    return (
        <Container>
            {
                notification ? (
                        <>
                            <Badge  badgeContent={4} >
                                <Icon fontSize={size} />
                            </Badge>
                            <Nav > {text} </Nav>
                        </>
                ) :
                (
                    <>
                        {
                            (directionIcon == "left" ? (
                                <>
                                    <Icon fontSize={size} />
                                    <Nav bold={bold}> {text} </Nav>
                                </>
                            ) : (
                                <>
                                    <Nav bold={bold} > {text} </Nav>
                                    <Icon fontSize={size} sx={{
                                        ml: '4px'
                                    }}/>
                                </>
                            ))
                        }
                    </>
                )
            }
        </Container>
    )
}
