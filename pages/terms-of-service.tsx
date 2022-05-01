/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//components
import DesktopNavbar from "../components/DesktopNavbar"
import Footer from "../components/Footer"
import Container from "../components/Container"
import styled from 'styled-components'

const TermsOfServiceePage = styled.div`
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
const TextContainer = styled.div`
padding-top:60px;
`
const Headings = styled.h1`
font-weight: 600;
font-size: 30px;
line-height: 36px;
padding-bottom: 32px;
`
const Paragraph = styled.p`
font-weight: 300;
font-size: 18px;
line-height: 36px;
`
const Paragraphlist = styled.li`
font-weight: 300;
font-size: 18px;
line-height: 36px;
list-style: disc;
list-style-position: inside;
margin-left:20px;
`

export default function termsofservice () {
  return (
        <div className='font-body'>
            <Head>
                <title>Web3Media Privacy policy</title>
                <meta
                name="description"
                content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds"/>
                <link rel="icon" href="/images/logo.svg" />
            </Head>
            <DesktopNavbar></DesktopNavbar>

            <TermsOfServiceePage className='text-w'>
                <div className='px-8 pt-8 md:px-24 lg:px-48'>
                    <div className='flex'>
                        <Link href='/legal'>
                            <a>
                                <h1 className='underline text-lg'>Home </h1>
                            </a>
                        </Link>
                    <h1 className='text-b4 text-lg'>/ Terms of Service</h1>
                </div>

                <div className='pt-20'>
                    <h1 className='text-6xl font-bold'>Terms of Service</h1>
                    <p className='text-xl text-b5 pt-8 pb-20'>Updated at 2022-04-28</p>
                </div>

                <TextContainer>
                    <Headings>General Terms</Headings>
                    <Paragraph>By accessing and placing an order with Web3D Media, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Web3D Media.
                    <Paragraph className='py-8'></Paragraph>
                    Under no circumstances shall Web3D Media team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Web3D Media team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.
                    <Paragraph className='py-8'></Paragraph>
                    Web3D Media will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>License</Headings>
                    <Paragraph>
                            Web3D Media grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.
                            <Paragraph className='py-8'></Paragraph>
                            These Terms & Conditions are a contract between you and Web3D Media (referred to in these Terms & Conditions as "Web3D Media", "us", "we" or "our"), the provider of the Web3D Media website and the services accessible from the Web3D Media website (which are collectively referred to in these Terms & Conditions as the "Web3D Media Service").
                            <Paragraph className='py-8'></Paragraph>
                            You are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the Web3D Media Service. In these Terms & Conditions, "you" refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice.
                    </Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Definitions and key terms</Headings>
                    <Paragraph>
                    To help explain things as clearly as possible in this Privacy Policy, every time any of these terms
                    are referenced, are strictly defined as:
                
                    <ul>
                    <Paragraphlist>Cookie: small amount of data generated by a website and saved by your web browser.It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information. </Paragraphlist>
                    <Paragraphlist>Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Web3D Media Incorporated, 651 N Broad Street Suite 206 Middletown de 19709, New Castle, Delaware that is responsible for your information under this Privacy Policy. </Paragraphlist>
                    <Paragraphlist>Country: where Web3D Media or the owners/founders of Web3D Media are based, in this case is United States. </Paragraphlist>
                    <Paragraphlist>Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Web3D Media and use the services. </Paragraphlist>
                    <Paragraphlist>Service: refers to the service provided by Web3D Media as described in the relative terms (if available) and on this platform. </Paragraphlist>
                    <Paragraphlist>Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you. </Paragraphlist>
                    <Paragraphlist>Website: Web3D Media's site, which can be accessed via this URL: https://web3d.media/ </Paragraphlist>
                    <Paragraphlist>You: a person or entity that is registered with Web3D Media to use the Services. </Paragraphlist>
                    </ul>
                    </Paragraph>
                </TextContainer>
            </div>
            </TermsOfServiceePage>      

        <Container>
            <Footer></Footer>
        </Container>
    </div>
  )
}
