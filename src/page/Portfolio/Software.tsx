import styled from '@emotion/styled'
import React from 'react'
import { breakpoints } from '../../styles/MediaQuery'
import { software } from './assets'
import Card from './Card'


const Software = () => {
    return (
        <Container>
            <H5>Software Portfolio</H5>
            <Card title="Student Pickup System" showcase={software.p5.image} detail={software.p5.detail}  role="Front-end Developer" framework={software.p5.framework}/>
            <Card title="IOT Dashboard Monitoring System" caption="More than 3 project for this type" showcase={software.p1.image} detail={software.p1.detail}  role="Full-Stack Developer" framework={software.p1.framework}/>
            <Card title="Smart Device Interface" caption="More than 3 project for this type" showcase={software.p2.image} detail={software.p2.detail} role="Embeeded System Developer" framework={software.p2.framework}/>
            <Card title="Trouble Ticket System"  showcase={software.p3.image} detail={software.p3.detail} role="Full-Stack Developer" framework={software.p3.framework}/>
            <Card title="Project Management Dashboard" showcase={software.p4.image} detail={software.p4.detail} role="Full-Stack Developer" framework={software.p4.framework}/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    margin: 0 10vw;
    ${breakpoints.lg}{
        align-items:center;

    }
`

const H5 = styled.h5`
    font-weight:700;
    font-size:2rem;
    margin: 50px 0 15px;
    ${breakpoints.lg}{
        font-size:1.7rem;
        margin:30px;
    }
`

export default Software
