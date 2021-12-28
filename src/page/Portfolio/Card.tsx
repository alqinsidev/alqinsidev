import styled from '@emotion/styled'
import React from 'react'
import Colors from '../../styles/Colors'
import { breakpoints } from '../../styles/MediaQuery'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

interface Props {
    title:string;
    caption?:string;
    detail?:string[];
    showcase:string[];
    role:string;
    framework?:any[];
}


const Card:React.FunctionComponent<Props> = ({title,caption,showcase,detail,role,framework}) => {

    return (
        <Container>
            <MainContainer>
                <Title>{title}</Title>
                <Caption>{caption}</Caption>
                <CarouselContainer width={325} infiniteLoop autoPlay stopOnHover showIndicators={false} showThumbs={false} showStatus={false}>
                    {showcase.map((e) => <ImgContainer><Img src={e} /></ImgContainer>)}
                </CarouselContainer>
            </MainContainer>
            <DetailContainer>
                <SubTitle>Project Detail</SubTitle>
                {
                    detail?.map((e)=> <Detail>{e}</Detail>)
                }
                <SubTitle>Role</SubTitle>
                <Detail>{role}</Detail>
                {
                    framework?
                    <>
                        <SubTitle>Framework Used</SubTitle>
                        <FrameworkContainer>
                            {
                                framework?.map((e)=> <Framework onClick={()=> window.open(e.url,"_blank")} src={e.image}/>)
                            }
                        </FrameworkContainer>
                    </>
                    :null    
                }
            </DetailContainer>
        </Container>
    )
}


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    background-color:${Colors.lightGray};
    border: 3.5px solid #f0f0f0;
    border-radius:10px;
    padding:10px;
    margin:20px 0;
    ${breakpoints.lg}{
        flex-direction:column;
        width: 85vw;

    }
`
const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:10px 40px;
    ${breakpoints.lg}{

    }
`
const DetailContainer = styled.div`
    dislpay:flex;
    justify-contnet:center;
    align-items:center;
    margin-top:80px;
    ${breakpoints.lg}{
        margin:0;
        align-items:center;
        flex-direction:row;
        padding:0 18px;
    }
`
const Title = styled.h5`
    margin:5px;
    font-weight:700;
    font-size:1.3rem;
    ${breakpoints.lg}{
        font-size:1.2rem;
        text-align:center;
        padding:0px 20px;
    }
`
const SubTitle = styled.h5`
font-weight:600;
font-size:1rem;
margin: 0;
${breakpoints.lg}{
        margin:25px 5px 5px 5px;
        font-size:1rem;
        text-align:center;
    }
`
const Caption = styled.p`
${breakpoints.lg}{
        margin:5px;
        font-weight:400;
        font-size:.9rem;
        text-align:center;
    }
`
const Detail = styled.p`
    margin:2px 64px 20px 0;
    ${breakpoints.lg}{
        margin:5px;
        font-weight:400;
        font-size:.9rem;
        text-align:center;
    }
`
const Img = styled.img`
    width:300px;
    height:auto;
`
const CarouselContainer = styled(Carousel)``;

const ImgContainer = styled.div`
    display:flex;
    justify-content:center
    align-items:center
`

const FrameworkContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    ${breakpoints.lg}{
        justify-content:center;

    }
`

const Framework = styled.img`
    margin:15px;
    height:48px;
    &:nth-of-type(1){
        margin:15px 15px 15px 0;
    }
`
export default Card
