import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import EarlyAccess from '../components/EarlyAccess';
import { Link as ScrollLink } from 'react-scroll';

const MobileMenuContainer = styled.div<{ slide: boolean }>`
    display: none;
    @media (max-width: 1024px) {
        display:block;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(40px);
        height: 100vh;
        z-index: 120;
        width:100%;
        position: fixed;
        overflow-y: scroll;
        right:${({ slide }) => slide ? ' 0' : '-100%'};
        transition: right 0.5s ease-in-out;
        display: block;
    }
`
const MobileMenuClose = styled.div`
    display: flex;
    margin: 10px;
    width: 21px;
    height: 2px;
    padding: 0px;
    background: var(--B4);
    
    &:nth-child(2) {
        opacity: 0;
    }
    
    &:nth-child(1) {
        transform: translateY(12px) rotate(45deg);
    }
    
    &:nth-child(3) {
        transform: translateY(-12px) rotate(-45deg);
    }
`
const MobileNav = styled.div`
    @media (max-width: 1024px) {
        font-size: 60px;
        line-height: 58px;
        font-weight: 400;
        color: var(--B7);
    }
    @media (max-width: 550px) {
        font-size: 30px;
        line-height: 28.95px;
        font-weight: 00;
    }
`
const MobileNavNumber = styled.div`
    @media (max-width: 1024px) {
        font-size: 20px;
        line-height: 29.65px;
        font-weight: 800;
        color: var(--B5);
    }
    @media (max-width: 550px) {
        font-size: 10px;
        line-height: 19.65px;
        font-weight: 400;
    }
`
const MobileMenuLine = styled.div`
    background: var(--B3);
    height: 0.5px;
    margin-bottom: 60px;
    position: relative;
`

const ImgContainer = styled.div`
    position:absolute;
    margin-top:-75px;
    margin-bottom: 60px;
`
const Circle = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 100px;
    @media (max-width: 550px) {
        width: 49px;
        height: 47px;
        margin: 0;
    }
`
const CircleImage = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-size: cover;
    border-radius: 50%;
    @media (max-width: 550px) {
        width: 50px;
        height: 50px;
    }
`
const CircleText = styled.div`
   position: absolute;
    width: 100%;
    color: var(--W);
        @media (max-width: 550px) {
            top: 0px;
        }
`
const CircleTextSpan = styled.span`
    position: absolute;
    top: -70px;
    left: 50%;
    font-size: 8px;
    transform-origin: 0 70px;
    @media (max-width: 550px){
        left: 50%;
        font-size: 5px;
        top: -10px;
        transform-origin: 0 35px;
    }
`
const MobileMenu = ({ closemenu, slide, }) => {
    const text = 'Demonstrating the principle of value for skills --'

    const [showearlyaccess, setShowEarlyAccess] = useState<boolean>(false)

    const openModal = () => {
        closemenu(false)
        setShowEarlyAccess(true)
    }
    return (

        <>
            {
                showearlyaccess &&
                <EarlyAccess closeearlyaccess={setShowEarlyAccess}></EarlyAccess>
            }
            <MobileMenuContainer slide={slide} className='p-8 text-left absolute block top-0 w-full overflow-hidden md:text-center xl:hidden'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src='/images/new-logo-removebg.png' width={58} height={24} alt="logo" objectFit='contain' className='hidden filter grayscale' />
                    </div>

                    <ul onClick={() => closemenu(false)}>
                        <li>
                            <MobileMenuClose></MobileMenuClose>
                            <MobileMenuClose></MobileMenuClose>
                            <MobileMenuClose></MobileMenuClose>
                        </li>
                    </ul>
                </div>

                <ul className='pt-20 pb-20 md:pt-24 md:pb-32'>
                    <li className='flex flex-col pb-4'>
                        <MobileNavNumber>01</MobileNavNumber>
                        <MobileNav >
                            <Link href='/early-access'>
                                <a>Early Access</a>
                            </Link>
                        </MobileNav>
                    </li>
                    <li className='flex flex-col pb-4'>
                        <MobileNavNumber>02</MobileNavNumber>
                        <MobileNav>
                            <ScrollLink to="products" spy={true} smooth={true} offset={-20} duration={900} onClick={() => closemenu(false)}>
                                Products
                            </ScrollLink>
                        </MobileNav>
                    </li>
                    <li className='flex flex-col pb-4'>
                        <MobileNavNumber>03</MobileNavNumber>
                        <MobileNav>
                            <ScrollLink to="teams" spy={true} smooth={true} offset={-20} duration={900} onClick={() => closemenu(false)}>
                                Team
                            </ScrollLink>
                        </MobileNav>
                    </li>
                </ul>

                <MobileMenuLine></MobileMenuLine>


                <ImgContainer>
                    <Image src='/images/mobile-menu-vector.png' width={30} height={30} alt="mobile-vector-image" />
                </ImgContainer>

                <ul className="mb-24">
                    <Link href="https://www.linkedin.com/company/web3dmedia" passHref>
                        <a target='_blank'>
                            <li className='list-inside list-disc text-2xl leading-7 pb-10 font-normal uppercase text-w md:list-none d:text-3xl md:leading-8 md:pb-10' onClick={() => closemenu(false)}>Instagram</li>
                        </a>
                    </Link>

                    <Link href="https://www.linkedin.com/company/web3dmedia" passHref>
                        <a target='_blank'>
                            <li className='list-inside list-disc text-2xl leading-7 pb-10 font-normal uppercase text-w md:list-none d:text-3xl md:leading-8 md:pb-10' onClick={() => closemenu(false)}>Twitter</li>
                        </a>
                    </Link>

                    <Link href="https://www.linkedin.com/company/web3dmedia" passHref>
                        <a target='_blank'>
                            <li className='list-inside list-disc text-2xl leading-7 pb-10 font-normal uppercase text-w md:list-none d:text-3xl md:leading-8 md:pb-10' onClick={() => closemenu(false)}>Linkedin</li>
                        </a>
                    </Link>
                </ul>

                <Circle>
                    <CircleImage>
                        <Image src='https://res.cloudinary.com/dqew5naa7/image/upload/v1674443229/earth_i6vnpo.gif' width={100} height={100} alt="earth" />
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
            </MobileMenuContainer>
        </>
    )
}

export default MobileMenu