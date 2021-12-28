import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../styles/MediaQuery'
import Colors from '../styles/Colors'
import {Spin as Hamburger} from 'hamburger-react'
import { Link } from 'react-router-dom'

interface UlProps {
    isOpen:boolean;
}
const Navbar:React.FunctionComponent = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const [width,setWidth] = useState<number>(window.innerWidth)

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        })
    },[width])

    return (
        <Header>
           {
               width<1024?
               <MenuIcon toggle={setIsOpen} toggled={isOpen} color='#fff' size={20}/>
               :null
            }
           <Ul isOpen={isOpen}>
                <Li to={'/home'} onClick={()=>setIsOpen(false)}>Home</Li>
                <Li to={'/about'} onClick={()=>setIsOpen(false)}>About Me</Li>
                <Li to={'/portfolio'} onClick={()=>setIsOpen(false)}>Portfolio</Li>
                <Li to={'/playground'} onClick={()=>setIsOpen(false)}>Playground</Li>
           </Ul>
        </Header>
    )
}

const Header = styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    justify-content:flex-end;
    background-color:transparent;
    height:15vh;
    

    ${breakpoints.lg}{
        height:auto;
        background-color:${Colors.lightPrimary};
        margin:0;
    }
`

const Ul = styled.ul<UlProps>`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    list-style : none;
    z-index:10;
    ${breakpoints.lg}{
        flex-direction:column;
        background-color:${Colors.lightPrimary};
        position:absolute;
        top:50px;
        justify-content:center;
        align-items:center;
        opacity: 1;
        width:100%;
        ${
            props => props.isOpen?
            `
                left:0;
                z-index:99;
            `
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

    text-align:center;
    text-decoration:none;
    font-weight:700;
    font-size:1.6rem;
    color:#2f2f2f;
    text-transform:uppercase;
    &:active,&:hover{
        transition:.2s;
        background-color:${Colors.lightPrimary};
        color:#fff;
    }
    padding:10px 20px;
    border-radius:10px;
    ${breakpoints.lg}{
        width:100%;
        &:active,&:hover{
            background-color:${Colors.lightPrimary};
        }
        padding:20px 0;
    }
`

export default Navbar;