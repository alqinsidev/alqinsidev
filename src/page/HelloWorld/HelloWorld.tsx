import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import Colors from '../../styles/Colors';
import { breakpoints } from '../../styles/MediaQuery';

interface Props {
    onFinished:Function;
}
const HelloWorld:React.FunctionComponent<Props> = ({onFinished}) => {
    const loaderDom = document.getElementById('loader')!;
    const [animationCount,setAnimationCount] = useState<number>(0);

    useEffect(() => {
        if(animationCount === 11){
            setTimeout(()=> onFinished(true),100)
            
        }
    }, [animationCount])
    return ReactDOM.createPortal(
        <Container onAnimationEnd={()=>setAnimationCount(animationCount + 1)}>
            <Item width="570" height="58" viewBox="0 0 570 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.2001 3.59999V54H37.5361V33.336H14.6401V54H2.97607V3.59999H14.6401V23.472H37.5361V3.59999H49.2001Z" stroke="white" strokeWidth="5"/>
                <path d="M100.149 44.64V54H61.1245V3.59999H99.2125V12.96H72.7165V23.904H96.1165V32.976H72.7165V44.64H100.149Z" stroke="white" strokeWidth="5"/>
                <path d="M109.429 3.59999H121.093V44.496H146.365V54H109.429V3.59999Z" stroke="white" strokeWidth="5"/>
                <path d="M152.882 3.59999H164.546V44.496H189.818V54H152.882V3.59999Z" stroke="white" strokeWidth="5"/>
                <path d="M219.9 54.864C214.668 54.864 209.94 53.736 205.716 51.48C201.54 49.224 198.252 46.128 195.852 42.192C193.5 38.208 192.324 33.744 192.324 28.8C192.324 23.856 193.5 19.416 195.852 15.48C198.252 11.496 201.54 8.37599 205.716 6.11999C209.94 3.86399 214.668 2.73599 219.9 2.73599C225.132 2.73599 229.836 3.86399 234.012 6.11999C238.188 8.37599 241.476 11.496 243.876 15.48C246.276 19.416 247.476 23.856 247.476 28.8C247.476 33.744 246.276 38.208 243.876 42.192C241.476 46.128 238.188 49.224 234.012 51.48C229.836 53.736 225.132 54.864 219.9 54.864ZM219.9 44.928C222.876 44.928 225.564 44.256 227.964 42.912C230.364 41.52 232.236 39.6 233.58 37.152C234.972 34.704 235.668 31.92 235.668 28.8C235.668 25.68 234.972 22.896 233.58 20.448C232.236 18 230.364 16.104 227.964 14.76C225.564 13.368 222.876 12.672 219.9 12.672C216.924 12.672 214.236 13.368 211.836 14.76C209.436 16.104 207.54 18 206.148 20.448C204.804 22.896 204.132 25.68 204.132 28.8C204.132 31.92 204.804 34.704 206.148 37.152C207.54 39.6 209.436 41.52 211.836 42.912C214.236 44.256 216.924 44.928 219.9 44.928Z" stroke="white" strokeWidth="5"/>
                <path d="M352.808 3.59999L336.32 54H323.792L312.704 19.872L301.256 54H288.8L272.24 3.59999H284.336L295.712 39.024L307.592 3.59999H318.392L329.912 39.312L341.648 3.59999H352.808Z" stroke="white" strokeWidth="5"/>
                <path d="M383.095 54.864C377.863 54.864 373.135 53.736 368.911 51.48C364.735 49.224 361.447 46.128 359.047 42.192C356.695 38.208 355.519 33.744 355.519 28.8C355.519 23.856 356.695 19.416 359.047 15.48C361.447 11.496 364.735 8.37599 368.911 6.11999C373.135 3.86399 377.863 2.73599 383.095 2.73599C388.327 2.73599 393.031 3.86399 397.207 6.11999C401.383 8.37599 404.671 11.496 407.071 15.48C409.471 19.416 410.671 23.856 410.671 28.8C410.671 33.744 409.471 38.208 407.071 42.192C404.671 46.128 401.383 49.224 397.207 51.48C393.031 53.736 388.327 54.864 383.095 54.864ZM383.095 44.928C386.071 44.928 388.759 44.256 391.159 42.912C393.559 41.52 395.431 39.6 396.775 37.152C398.167 34.704 398.863 31.92 398.863 28.8C398.863 25.68 398.167 22.896 396.775 20.448C395.431 18 393.559 16.104 391.159 14.76C388.759 13.368 386.071 12.672 383.095 12.672C380.119 12.672 377.431 13.368 375.031 14.76C372.631 16.104 370.735 18 369.343 20.448C367.999 22.896 367.327 25.68 367.327 28.8C367.327 31.92 367.999 34.704 369.343 37.152C370.735 39.6 372.631 41.52 375.031 42.912C377.431 44.256 380.119 44.928 383.095 44.928Z" stroke="white" strokeWidth="5"/>
                <path d="M451.549 54L441.829 39.96H441.253H431.101V54H419.437V3.59999H441.253C445.717 3.59999 449.581 4.34399 452.845 5.83199C456.157 7.31999 458.701 9.43199 460.477 12.168C462.253 14.904 463.141 18.144 463.141 21.888C463.141 25.632 462.229 28.872 460.405 31.608C458.629 34.296 456.085 36.36 452.773 37.8L464.077 54H451.549ZM451.333 21.888C451.333 19.056 450.421 16.896 448.597 15.408C446.773 13.872 444.109 13.104 440.605 13.104H431.101V30.672H440.605C444.109 30.672 446.773 29.904 448.597 28.368C450.421 26.832 451.333 24.672 451.333 21.888Z" stroke="white" strokeWidth="5"/>
                <path d="M472.382 3.59999H484.046V44.496H509.318V54H472.382V3.59999Z" stroke="white" strokeWidth="5"/>
                <path d="M515.835 3.59999H538.731C544.203 3.59999 549.027 4.65599 553.203 6.76799C557.427 8.83199 560.691 11.76 562.995 15.552C565.347 19.344 566.523 23.76 566.523 28.8C566.523 33.84 565.347 38.256 562.995 42.048C560.691 45.84 557.427 48.792 553.203 50.904C549.027 52.968 544.203 54 538.731 54H515.835V3.59999ZM538.155 44.424C543.195 44.424 547.203 43.032 550.179 40.248C553.203 37.416 554.715 33.6 554.715 28.8C554.715 24 553.203 20.208 550.179 17.424C547.203 14.592 543.195 13.176 538.155 13.176H527.499V44.424H538.155Z" stroke="white" strokeWidth="5"/>
            </Item>
        </Container>
        ,loaderDom
    );
}

const lineAnim = keyframes`
to{
    stroke-dashoffset: 0;
}`

const fill = keyframes`
from {
    fill:transparent;
}
to{
    fill: ${Colors.lightPink};
}`

const fadeOut = keyframes`
to{
    opacity: 0;
    display: none;
    z-index: -99;
}`

const Container = styled.div`
    position:fixed;
    width:100%;
    height:100vh;
    background-color:${Colors.pink};
    z-index:99;
    animation: ${fadeOut} 1s ease forwards 6s;
`

const Item = styled.svg`
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    animation: ${fill} .8s ease forwards 4s;
    ${breakpoints.lg}{
        width:80%;
        color:#000;
    }
    z-index:99;

    & path:nth-of-type(1){
        stroke-dasharray: 273;
        stroke-dashoffset: 273;
        animation: ${lineAnim} 2s ease forwards;
    }
    & path:nth-of-type(2){
        stroke-dasharray: 279;
        stroke-dashoffset: 279;
        animation: ${lineAnim} 2s ease forwards .3s;
    }
    & path:nth-of-type(3){
        stroke-dasharray: 175;
        stroke-dashoffset: 175;
        animation: ${lineAnim} 2s ease forwards .7s;
    }
    & path:nth-of-type(4){
        stroke-dasharray: 175;
        stroke-dashoffset: 175;
        animation: ${lineAnim} 2s ease forwards 1s;
    }
    & path:nth-of-type(5){
        stroke-dasharray: 270;
        stroke-dashoffset: 270;
        animation: ${lineAnim} 2s ease forwards 1.2s;
    }
    & path:nth-of-type(6){
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        animation: ${lineAnim} 2s ease forwards 1.5s;
    }
    & path:nth-of-type(7){
        stroke-dasharray: 174;
        stroke-dashoffset: 174;
        animation: ${lineAnim} 2s ease forwards 1.7s;
    }
    & path:nth-of-type(8){
        stroke-dasharray: 284;
        stroke-dashoffset: 284;
        animation: ${lineAnim} 2s ease forwards 2s;
    }
    & path:nth-of-type(9){
        stroke-dasharray: 274;
        stroke-dashoffset: 274;
        animation: ${lineAnim} 2s ease forwards 2.1s;
    }
    & path:nth-of-type(10){
        stroke-dasharray: 274;
        stroke-dashoffset: 274;
        animation: ${lineAnim} 2s ease forwards 2.3s;
    }
    `

  

export default HelloWorld;