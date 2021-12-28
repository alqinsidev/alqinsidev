import styled from '@emotion/styled';
import React from 'react'
import Colors from '../styles/Colors';
import {FaLinkedin,FaGithubSquare, FaInstagramSquare, FaTwitterSquare, FaEnvelopeSquare} from 'react-icons/fa'

const Footer:React.FunctionComponent = () => {
    const handleLink = (link:string) => window.open(link,"_blank");
    return(
        <Container>
            <p>Visit me on</p>
            <SocmedContainer>
                <Icon><FaLinkedin onClick={()=>handleLink('https://www.linkedin.com/in/alqinsi/')}/></Icon>
                <Icon><FaGithubSquare onClick={()=>handleLink('https://github.com/alqinsidev')}/></Icon>
                <Icon><FaInstagramSquare onClick={()=>handleLink('https://www.instagram.com/alqinsi/')}/></Icon>
                <Icon><FaTwitterSquare onClick={()=>handleLink('https://twitter.com/padlanalqinsi')}/></Icon>
                <Icon><FaEnvelopeSquare onClick={()=>handleLink('mailto:padlanalqinsi@live.com')}/></Icon>
            </SocmedContainer>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:30vh;
    background-color:${Colors.dark};
    color:#fff;
`
const SocmedContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    width:25%;
`
const Icon = styled.div`
    font-size:32px;
    margin: 0 7px;
`


export default Footer;