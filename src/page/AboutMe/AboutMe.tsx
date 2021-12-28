import styled from '@emotion/styled';
import React from 'react'
import Colors from '../../styles/Colors';
import HandsomeMan  from '../../assets/images/handsome-man.png'
import { breakpoints } from '../../styles/MediaQuery';
import { keyframes } from '@emotion/react';

const AboutMe:React.FunctionComponent = ()=> {

    return (
        <Container>
            <Img src={HandsomeMan}/>
            <TextContainer>
                <H3>Padlan Alqinsi</H3>
                <H5>Software Engineer, IoT Engineer, etc.</H5>
                <P>A short story about me.</P>
                <P>I was graduated as an Electrical Engineer and start my professional journey as an Internet of Things Developer.</P>
                <P>In my early carrer, I was focusing to made an end-to-end solution for IoT system, Developing a whole system from the device it self until the end users application.</P>
                <P>Building an end-to-end solution it's mean I have to push my self to learn Back-end and Front-end development. And that is the reason for me to being a Full-stack Developer</P>
                <P>I have experiencing so many programing language like C, C#, Python, PHP and so on. But now I focusing my self to be a Javascript expert.</P>
                <P>Nowdays I focusing my self to be a Full-stack developer with modern JS framework like React, Express and so on.</P>
            </TextContainer>
        </Container>
    )
}

const realFadeIn = keyframes`
    0% { opacity: 0; }
    100%   { opacity: 1; }
`

const Container = styled.div`
    background-color:${Colors.cream};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row-reverse;
    margin-top:calc(-15vh - 20px);
    padding-top:calc(15vh + 20px);
    padding-bottom:100px;
    animation: ${realFadeIn} .8s linear 1;
    ${breakpoints.lg}{
        margin:0;
        padding:0;
        flex-direction:column;
    }
`
const TextContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    margin: 10px 100px;
    ${breakpoints.lg}{
        align-items:center;
        margin:5px 20px 10vh;
    }
`
const Img = styled.img`
margin:0 100px 0 0;
    ${breakpoints.lg}{
        height:auto;
        width:60%;
        margin: 20px 0;
    }
`
const H3 = styled.h3`
    margin:0;
    font-weight:700;
    font-size:4rem;
    ${breakpoints.lg}{
        font-size:1.8rem;
        text-align:center;
    }
`
const H5 = styled.h5`
    margin:7px 7px 12px;
    font-weight:400;
    font-size:1.3rem;
    ${breakpoints.lg}{
        text-align:center;
    }
`
const P = styled.p`
    margin:10px;
    font-weight:500;
    font-size:1.2rem;
    ${breakpoints.lg}{
        font-size:1rem;
        text-align:center;
        margin:5px;
    }
`

export default AboutMe;
