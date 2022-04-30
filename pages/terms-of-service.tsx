import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//components
import DesktopNavbar from "../components/DesktopNavbar"
import Footer from "../components/Footer"
import Container from "../components/Container"
import styled from 'styled-components'

export default function termsofservice () {
  return (
        <div className='font-body'>
        <DesktopNavbar></DesktopNavbar>

         <div className='px-8 pt-8 md:px-24 lg:px-48'>
            <div className='flex'>
                <Link href='/legal'>
                    <a>
                        <h1 className='text-w underline text-lg'>Home </h1>
                    </a>
                </Link>
                <h1 className='text-b4 text-lg'>/ Terms of Service</h1>
            </div>
         </div>

        <Container>
            <Footer></Footer>
        </Container>
    </div>
  )
}
