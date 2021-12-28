import styled from '@emotion/styled';
import React from 'react'
import { Outlet } from 'react-router-dom';
import { breakpoints } from '../styles/MediaQuery';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout:React.FunctionComponent = () => {
    return(
        <>
            <Navbar/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </>
    )
}

const Main = styled.div`
    ${breakpoints.lg}{
        top:50px;
    }
`

export default Layout;