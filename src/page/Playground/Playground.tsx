import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react'
import UC from '../../assets/images/under.svg'
import { breakpoints } from '../../styles/MediaQuery';

const Playground:React.FunctionComponent = () => {
    return (
        <Container>
            <Img src={UC} alt="" />
            <H1>This section is under construction</H1>
        </Container>
    )
}

const realFadeIn = keyframes`
    0% { opacity: 0; }
    100%   { opacity: 1; }
`

const Container = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    height:80vh;
    animation: ${realFadeIn} .8s linear 1;
`

const Img = styled.img`
    width:50%;
    ${breakpoints.lg}{
        width:80%;
    }
`
const H1 = styled.h1`
    font-weight:700;
    margin:30px;
    text-transform:uppercase;
    ${breakpoints.lg}{
        text-align:center;
    }

`
export default Playground;
