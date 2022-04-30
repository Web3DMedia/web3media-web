import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//components
import DesktopNavbar from "../components/DesktopNavbar"
import Footer from "../components/Footer"
import Container from "../components/Container"
import styled from 'styled-components'

const LegalPage = styled.div`
    background: url(/images/background.png);
    overflow:hidden;
    background-size: 500px;
    background-position: center;
    background-repeat: none;
    @media (max-width: 1024px) {
        border: none;
        background-size: 500px;
    }
    @media (max-width: 550px) {
        border: none;
        background-size: 300px;
    }
`
const Mesh = styled.div`
    width: 724px;
    height: 650px;
    position: absolute;
    left: 50%;
    top:420px;
    transform: translate(-50%, -50%);
    opacity: 0.14;
    background: radial-gradient(36.28% 36.28% at 50% 50%, #FD8AFD 0%, rgba(222, 28, 28, 0) 100%),
    radial-gradient(36.28% 36.28% at 50% 50%, rgba(41, 39, 160, 0.26) 0%, rgba(41, 39, 160, 0) 100%),
    radial-gradient(36.28% 36.28% at 50% 50%, rgba(201, 129, 56, 0.47) 0%, rgba(255, 202, 148, 0) 100%);
    @media (max-width: 1024px) {
      top:400px;
    }
    @media (max-width: 550px) {
      top: 400px;
      width: 382px;
      height: 442px;
    }
`
const FirstText = styled.h1`
padding-top: 82px;
font-weight: 800;
font-size: 40px;
line-height: 39px;
margin: 28px 0px;
    }
    @media (max-width: 550px) {
        font-size: 30px;
        line-height: 29px;
    }
`
const SecondText = styled.p`
font-weight: 400;
font-size: 20px;
line-height: 28px;
margin: 28px 0px;
width:65%;
    @media (max-width: 1024px) {
        width:100%;
    }
`
const LegalItem = styled.div`
border: 2px solid #2D2C2C;
box-sizing: border-box;
border-radius: 16px;
padding:29px 33px 41px 34px;
margin-right: 17px;
width:269px;
height: 226px;
    @media (max-width: 1024px) {
        margin-bottom: 17px;
    }
    @media (max-width: 550px) { 
        width:70%;
        margin:0 auto 25px;
    }
`
const LegalItemText = styled.h2`
padding-top:40px;
font-weight: 400;
font-size: 28px;
line-height: 32px;
    @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 32px;
    }
    @media (max-width: 550px) {
    
    }
`
export default function legal() {
  return (

    <div className='font-body'>
        <Head>
            <title>Web3Media Legal</title>
            <meta
            name="description"
            content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds"/>
            <link rel="icon" href="/images/logo.svg" />
      </Head>
        <DesktopNavbar></DesktopNavbar>
        
        <LegalPage>
            <div className='px-8 md:px-24 lg:px-48'>
            <FirstText className='text-w'>Web3D Media Legal</FirstText>
            <SecondText className='text-b5'>Web3d media takes your privacy 
            serious and is committed to ensuring a smooth experience.
            The documents below are details of how Web3d media manages your data</SecondText>

            <Mesh></Mesh>

            <div className='block justify-center md:flex-wrap md:flex pt-24'>
                <LegalItem>
                    <Image src="/images/legal-document.png" width={44} height={51} alt="legal document"/>
                    <LegalItemText className='text-b5'>Privacy policy</LegalItemText>
                </LegalItem>

                <LegalItem>
                    <Image src="/images/legal-document.png" width={44} height={51} alt="legal document"/>
                    <LegalItemText className='text-b5'>Terms of service</LegalItemText>
                </LegalItem>

                <LegalItem>
                    <Image src="/images/legal-document.png" width={44} height={51} alt="legal document"/>
                    <LegalItemText className='text-b5'>Cookies policies</LegalItemText>
                </LegalItem>

                <LegalItem>
                    <Image src="/images/legal-document.png" width={44} height={51} alt="legal document"/>
                    <LegalItemText className='text-b5'>Disclaimer notice</LegalItemText>
                </LegalItem>
            </div>
        
        </div>

        </LegalPage>
        
        <Container>
            <Footer></Footer>
        </Container>

    
    </div>
  )
}
