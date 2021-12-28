import styled from '@emotion/styled';
import React,{useEffect,useState} from 'react'
import Colors from '../../styles/Colors';
import { breakpoints } from '../../styles/MediaQuery';
import HandsomeMan from '../../assets/images/handsome-man.png'
import { keyframes } from '@emotion/react';


const Home:React.FunctionComponent = ()=> {
    const [headerText,setHeaderText] = useState<string>('');
    const [finish,setFinish] = useState<boolean>(false)
    const [counter,setCounter] = useState<number>(0)
    const HEADER_TEXT = 'Welcome to my page !'

    const Delay =  (ms:number) => new Promise<void> (resolve => setTimeout(resolve,ms));
    const Print = async ()=>{
        const length = HEADER_TEXT.length;
        if(counter < length){
            await Delay(70);
            setHeaderText(headerText + HEADER_TEXT[counter]);
            setCounter(counter +1)
        }
        else {
            await Delay(500);
            setFinish(true);
        }
    }
    useEffect(()=>{
        Print();
    },[counter])
    return (
        <Container>
            <JumbotronContainer>
                <Img src={HandsomeMan}/>
                <JumbotronCaptionContainer>
                    <H4>{headerText}</H4>
                    <Caption>Software Engineer, IT Enthussiast, etc</Caption>
                </JumbotronCaptionContainer>
            </JumbotronContainer>
        </Container>
    )
}

const fadeIn = keyframes`
    0% { opacity: 0; }
    90% { opacity:0; }
    100%   { opacity: 1; }
`
const realFadeIn = keyframes`
    0% { opacity: 0; }
    100%   { opacity: 1; }
`
const blink = keyframes`
    50%{
        opacity: .5;
    }
    100%{
        opacity: 1;
    }
`

const Container = styled.div`
height:95vh;
background-color:${Colors.primary};
margin-top:calc(-15vh - 20px);
padding-top:calc(15vh + 20px);
animation: ${realFadeIn} .8s linear 1;
z-index:1;
${breakpoints.lg}{
        margin:0;
        padding:0;
        display:flex;
        flex-direction:column;
    }
    `
    
    const JumbotronContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    
    ${breakpoints.lg}{
        justify-content:center;
        flex-direction:column;
        padding:0 5% 10vh;
        height:calc(80vh - 50px);
    }
`
const JumbotronCaptionContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:55%;
    margin-left:50px;
    ${breakpoints.lg}{
        margin:0;
        align-items:center;
        width:auto;
        padding:0 10%;
    }
`


const Img = styled.img`
    &:hover{
        animation: ${blink} 1s linear 1;
    }
    margin:-20px 60px 50px 100px;
    ${breakpoints.lg}{
        margin:0;
        height:auto;
        width:60%;
    }
`

const H4 = styled.h4`
font-size:4.7rem;
margin:0;
max-width:90%;
    ${breakpoints.lg}{
        max-width:100%;
        text-align:center;
        font-size:1.3rem;
        font-weight:600;
        margin:5px 0 0;
    }
`
const Caption = styled.h5`
    text-align:left;
    font-size:1rem;
    font-weight:400;
    margin:20px 10px 10px 5px;
    animation: ${fadeIn} 3s linear;
    ${breakpoints.lg}{
        text-align:center;
        font-weight:300;
    }
`

export default Home;
