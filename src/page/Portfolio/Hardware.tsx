import styled from '@emotion/styled'
import React from 'react'
import { breakpoints } from '../../styles/MediaQuery'
import { hardware } from './assets'
import Card from './Card'


const Hardware = () => {
    return (
        <Container>
            <H5>Hardware Portfolio</H5>
            <Card title="Water Quality Monitoring Buoy" caption="This project has 3 version on it's developement" showcase={hardware.p1.image} detail={hardware.p1.detail}  role="End-to-end IoT System Engineer" />
            <Card title="Long Range (LoRa) Communication" caption="More than 2 project using this technology" showcase={hardware.p2.image} detail={hardware.p2.detail} role="Embeeded System Developer" />
            <Card title="BLE Social Distancing Alarm" caption="This device has 2 version"  showcase={hardware.p3.image} detail={hardware.p3.detail} role="Full-Stack Developer" />
            <Card title="Smart Air Purifier" showcase={hardware.p4.image} detail={hardware.p4.detail} role="Full-Stack Developer" />
            <Card title="Smart Weapon Storage System" showcase={hardware.p5.image} detail={hardware.p5.detail} role="Full-Stack Developer" />
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

export default Hardware;
