import React, { useState, useEffect, useRef } from "react"
import Head from 'next/head'
import AccessSection from "../components/AccessSection"
import Container from '../components/Container'
import DesktopNavbar from '../components/DesktopNavbar'
import Footer from '../components/Footer'

const earlyaccess = () => {
   return (
      <div className="font-body">
         <Head>
            <title>Web3Media Early Access</title>
            <meta
            name="description"
            content="Creating, building and developing animations and creators resources for the new web."/>
            <link rel="icon" href="/images/logo.svg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://web3d.media" />
            <meta property="og:title" content="Web3D Media Early Access" />
            <meta property="og:description" content="Creating, building and developing animations and creators resources for the new web." />
            <meta property="og:image" content="/images/meta-image.jpg" />

            <meta property="twitter:type" content="website" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://web3d.media" />
                <meta property="twitter:title" content="Web3D Media Early Access" />
                <meta property="twitter:description" content="Creating, building and developing animations and creators resources for the new web."/>
                <meta property="twitter:image" content="/images/meta-image.jpg"></meta>
         </Head>
         <DesktopNavbar></DesktopNavbar>
         <Container>
            <div className="md:h-[70vh] pt-40 relative flex items-center flex-col">
               <AccessSection/>
            </div>
            <Footer></Footer>
         </Container>
         
      </div>
   )
}

export default earlyaccess