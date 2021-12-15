import React,{useState} from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../styles/MediaQuery'
import Colors from '../styles/Colors'
import {Spin as Hamburger} from 'hamburger-react'
import { Link,Outlet } from 'react-router-dom'

interface UlProps {
    isOpen:boolean;
}
const Navbar:React.FunctionComponent = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    return (
        <>
        <Header>
           <MenuIcon toggle={setIsOpen} toggled={isOpen} color='#fff' size={20}/>
           <Ul isOpen={isOpen}>
                <Li to={'/home'} onClick={()=>setIsOpen(false)}>Home</Li>
                <Li to={'/about'} onClick={()=>setIsOpen(false)}>About Me</Li>
                <Li to={'/portfolio'} onClick={()=>setIsOpen(false)}>Portfolio</Li>
                <Li to={'/contact'} onClick={()=>setIsOpen(false)}>Contact</Li>
           </Ul>
        </Header>
        <Main>
            <Outlet/>
        </Main>
        </>
    )
}

const Header = styled.div`
    align-items:center;

    ${breakpoints.lg}{
        background-color:${Colors.lightPrimary};
        padding:10px;
        display:flex;
        justify-content:flex-end;
        height:50px;
        margin:0;
    }
`
const Main = styled.div`
    ${breakpoints.lg}{
        top:50px;
    }
`

const Ul = styled.ul<UlProps>`
    list-style : none;
    ${breakpoints.lg}{
        background-color:${Colors.lightPrimary};
        position:absolute;
        top:50px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        opacity: 1;
        width:100%;
        ${
            props => props.isOpen?
            `left:0;`
            :
            `
            left:-100%;
            opacity:0;
            `
        }
        padding:0 0 100vh 0;
        transition: all 0.5s ease;
    }
    
`
const MenuIcon = styled(Hamburger)`
    display:none;
    ${breakpoints.lg} {
        display:block;
        position:absolute;
        top:0;
        right:0;
    }
`

const Li = styled(Link)`
    flex:1;
    width:100%;
    text-align:center;
    text-decoration:none;
    font-weight:700;
    font-size:2rem;
    color:#2f2f2f;
    ${breakpoints.lg}{
        padding:20px 0;
        text-transform:uppercase;
        &:active,&:hover{
            background-color:${Colors.primary};
            color:#fff;
        }
    }
`

export default Navbar;