import styled from '@emotion/styled';
import React,{useState} from 'react'
import { breakpoints } from '../../styles/MediaQuery';
import ilustration from '../../assets/images/onlineCV.svg'
import Colors from '../../styles/Colors';
import Software from './Software';
import Hardware from './Hardware';
import { keyframes } from '@emotion/react';

interface ButtonProps {
    active:boolean;
}

const Portfolio:React.FunctionComponent = () => {
    const [activeMenu,setActiveMenu] = useState<string>('software')

    const checkActive = (menu:string):boolean => menu === activeMenu;

    return (
        <>
        <Container>
            <Img src={ilustration} alt="" />
            <TextContainer>
                <H3>my portfolio</H3>
                <P>As a Software Engineer, let me share my experience about most highlighted work of mine.</P>
                <P>I have defined my work into 2 types. Please choose one of them to see my recent work</P>
                <ButtonContainer>
                    <Button active={checkActive('software')} onClick={()=>setActiveMenu('software')}>Software</Button>
                    <Button active={checkActive('hardware')} onClick={()=>setActiveMenu('hardware')}>Hardware</Button>
                </ButtonContainer>
            </TextContainer>
        </Container>
        <Container>
            {
                activeMenu === 'software' ? <Software/> : <Hardware/>
            }
        </Container>
        </>
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
    margin-top:calc(-15vh - 20px);
    padding-top:calc(15vh + 20px);
    padding-bottom:40vh;
    animation: ${realFadeIn} .8s linear 1;
    ${breakpoints.lg}{
        margin:0;
        flex-direction:column;
        padding:50px 0;
    }
    &:nth-of-type(even){
        margin-top:0;
        padding-top:0;
        background-color:#fff;
    }
`

const TextContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    margin: 5px 200px 5px 0;
    ${breakpoints.lg}{
        align-items:center;
        margin:5px 20px;
    }
`

const ButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    margin: 30px 20px;
`

const H3 = styled.h3`
    margin:5px 0 10px;
    font-weight:700;
    font-size:3rem;
    text-transform:uppercase;
    ${breakpoints.lg}{
        font-size:2rem;

    }
`

const P = styled.p`
font-weight:400;
font-size:1.2rem;
${breakpoints.lg}{
        margin:14px;
        text-align:center;
    }
`

const Img = styled.img`
    width:40%;
    margin:30px 50px 0 200px;
    ${breakpoints.lg}{
        margin:30px 0;
    }
`

const Button = styled.button<ButtonProps>`
    background-color:transparent;
    border:2px solid ${Colors.lightPrimary};
    border-radius:10px;
    color:${Colors.dark};
    margin: 0 20px;
    padding: 0 24px;
    font-family:Montserrat;
    height: 62px;
    font-size:24px;
    font-style:normal;
    ${breakpoints.lg}{
        height: 40px;
        font-size: 16px;
        font-weight:400;
    }
    &:hover{
        transition:.2s;
        background-color:${Colors.lightPrimary};
        color:#fff;
    }
    ${props => props.active?`
        transition:.2s;
        background-color:${Colors.lightPrimary};
        color:#fff;
        `:
        null
    }
`

export default Portfolio;
