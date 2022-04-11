import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const AboutSectionContainer = styled.section`
    border-bottom: 0.5px solid var(--B2);
`
const Text = styled.h1`
background: url(/images/planets.png);
background-size: 750px;
background-position: bottom left;
background-repeat: no-repeat;
font-weight: 800;
font-size: 52px;
padding:40px 0;
line-height: 56px;
width:83%;
padding-bottom: 190px;
color: var(--B3);
 @media (max-width: 1024px) {
font-weight: 800;
font-size: 36px;
line-height: 44px;
width:75%;
}
@media (max-width: 780px) {
width:85%;
padding:0px 0;
background: url(/images/planets.png);
background-size: 340px;
background-repeat: no-repeat;
font-size: 32px;
line-height: 42px;
background-position: 10px -50px;
} 
@media (max-width: 550px) {
font-weight: 800;
padding:30px 0;
width:100%;
font-size: 28px;
line-height: 34px;
background-size: 500px;
background-position: -50px -73px;
background-repeat: no-repeat;
}
`
const WhiteText = styled.span`
color: var(--W)
`
const Circle = styled.div`
    padding-left:40px;
    padding-top:150px;
    position: relative;
    width: 117x;
    height: 109px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 100px;
    @media (
        padding-top:30px;
        max-width: 780px) {
        width:100%;
} 
    @media (max-width: 550px) {
        width: 90.76px;
        height: 85px;
        margin: 0 auto;
        padding-left:0px;
        padding-top:105px;
    }
`
const CircleImage = styled.div`
    position: absolute;
    width: 117px;
    height: 109px;
    background-size: cover;
    border-radius: 50%;
    @media (max-width: 550px) {
        width: 90.75px;
        height: 85px;
    }
`
const CircleText = styled.div`
   position: absolute;
    width: 100%;
    text-transform: uppercase;
    color: var(--W);
        @media (max-width: 550px) {
            top: 0px;
        }
`
const CircleTextSpan = styled.span`
    position: absolute;
    top: -74px;
    left: 35%;
    font-size: 10px;
    transform-origin: 0 70px;
    @media (max-width: 550px){
        left: 50%;
        font-size: 8px;
        top: 47px;
        transform-origin: 0 62px;
    }
`
const AboutSection = () => {
    const text = 'Demonstrating the principle of value for skills --'
  return (
    <AboutSectionContainer>
        <div className='flex m-auto pb-12 xl:pb-12'>
            <Image src='/images/vector-blue.png' width={40} height={40} alt="earth" />
        </div>
        <div className='flex flex-col md:flex-row m-auto'>
        <Text>
            We are on a mission to help these categories of <WhiteText>creative ninjas </WhiteText> 
            scale in the endeavours and take their place in the <WhiteText>universe.</WhiteText>
        </Text>
        
        <Circle>
            <CircleImage>
                <Image src='/images/earth.gif' width={100} height={100} alt="earth" />
            </CircleImage>
            <CircleText>
                <p>
                    {text.split('').map((char, i) => {
                        return (
                            <CircleTextSpan key={i} style={{ transform: `rotate(${i * 7}deg)` }}>{char}</CircleTextSpan>
                        )
                    })}
                </p>
            </CircleText>
        </Circle>
        </div>
    </AboutSectionContainer>
  )
}

export default AboutSection