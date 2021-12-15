import styled from '@emotion/styled';
import React from 'react'
import Colors from '../../styles/Colors';
import { breakpoints } from '../../styles/MediaQuery';
import HandsomeMan from '../../assets/images/handsome-man.png'

const Home:React.FunctionComponent = ()=>{
    return (
        <Container>
            <JumbotronContainer>
                <Img src={HandsomeMan}/>
                <JumbotronCaptionContainer>
                    <H4>Welcome to my page !</H4>
                    <Caption>Software Engineer</Caption>
                </JumbotronCaptionContainer>
            </JumbotronContainer>
        </Container>
    )
}

const Container = styled.div`
    ${breakpoints.lg}{
        display:flex;
        flex-direction:column;

    }
    `
    
    const JumbotronContainer = styled.div`
    ${breakpoints.lg}{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        padding:0 5% 10vh;
        background-color:${Colors.primary};
        height:calc(80vh - 50px);
    }
`
const JumbotronCaptionContainer = styled.div`
    ${breakpoints.lg}{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:0 10%;
    }
`


const Img = styled.img`
    ${breakpoints.lg}{
        height:220px;
        width:50%;
    }
`

const H4 = styled.h4`
    ${breakpoints.lg}{
        font-size:1.22rem;
        font-weight:600;
        margin:0;
    }
`
const Caption = styled.h5`
    ${breakpoints.lg}{
        font-weight:300;
        margin:0;
    }
`

export default Home;
