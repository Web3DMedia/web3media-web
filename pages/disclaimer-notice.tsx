/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//components
import DesktopNavbar from "../components/DesktopNavbar"
import Footer from "../components/Footer"
import Container from "../components/Container"
import styled from 'styled-components'

const DisclaimerNoticePage = styled.div`
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

export default function disclaimernotice () {
  return (
        <div className='font-body'>

        <Head>
            <title>Web3Media Disclaimer notice</title>
            <meta
            name="description"
            content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds"/>
            <link rel="icon" href="/images/logo.svg" />
s
                    <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web3d.media" />
        <meta property="og:title" content="Web3D Media Disclaimer Notice" />
        <meta property="og:description" content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds" />
        <meta property="og:image" content="/images/meta-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://web3d.media" />
        <meta property="twitter:title" content="Web3D Media Disclaimer Notice" />
        <meta property="twitter:description" content="Empowering and providing financial freedom for web3 designers, artists, blockchain talents, and creative minds"/>
        <meta property="twitter:image" content="/images/meta-image.jpg"></meta>
        </Head>
        <DesktopNavbar></DesktopNavbar>

        <DisclaimerNoticePage className='text-b4'>
            
            <div className='px-8 pt-8 md:px-24 lg:px-48'>
                <div className='flex'>
                    <Link href='/legal'>
                        <a>
                            <h1 className='text-w underline text-lg'>Home </h1>
                        </a>
                    </Link>
                    <h1 className='text-b4 text-lg'>/ Disclaimer notice</h1>
                </div>

                <div className='pt-20'>
                    <h1 className='text-6xl font-bold'>Disclaimer Notice</h1>
                    <p className='text-xl text-b5 pt-8 pb-20'>Updated at 2022-04-28</p>
                    <Paragraph>Web3D Media hereby grants you access to https://web3d.media/ (“the Website”) and invites you to purchase the services offered here.</Paragraph>
                </div>
                
                
            <TextContainer>
                    <Headings>Definitions and key terms</Headings>
                    <Paragraph>
                    To help explain things as clearly as possible in this Privacy Policy, every time any of these terms
                    are referenced, are strictly defined as:
                
                    <ul>
                    <Paragraphlist>Cookie: small amount of data generated by a website and saved by your web browser.It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information. </Paragraphlist>
                    <Paragraphlist>Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Web3D Media Incorporated, 651 N Broad Street Suite 206 Middletown de 19709, New Castle, Delaware that is responsible for your information under this Privacy Policy. </Paragraphlist>
                    <Paragraphlist>Service: refers to the service provided by Web3D Media as described in the relative terms (if available) and on this platform. </Paragraphlist>
                    <Paragraphlist>Website: Web3D Media's site, which can be accessed via this URL: https://web3d.media/ </Paragraphlist>
                    <Paragraphlist>You: a person or entity that is registered with Web3D Media to use the Services. </Paragraphlist>
                    </ul>
                </Paragraph>
            </TextContainer> 

            <TextContainer>
                <Headings>Limited liability</Headings>
                <Paragraph>
                    Web3D Media endeavours to update and/or supplement the content of the website on a regular basis. Despite our care and attention, content may be incomplete and/or incorrect.
                    The materials offered on the website are offered without any form of guarantee or claim to their correctness. These materials can be changed at any time without prior notice from Web3D Media.
                    Particularly, all prices on the website are stated subject to typing and programming errors. No liability is assumed for the implications of such errors. No agreement is concluded on the basis of such errors.
                    Web3D Media shall not bear any liability for hyperlinks to websites or services of third parties included on the website. From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
                    Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
                </Paragraph>
            </TextContainer>

            <TextContainer>
                <Headings>Links to Other Websites Disclaimer</Headings>
                <Paragraph>This Disclaimer applies only to the Services. The Services may contain links to other websites not operated or controlled by Web3D Media. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website’s own rules and policies. Such third parties may use their own cookies or other methods to collect information about you. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy and Terms of every site You visit.
                <Paragraph className='py-8'></Paragraph>
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</Paragraph>
            </TextContainer>
            
            <TextContainer>
                <Headings>Errors and Omissions Disclaimer</Headings>
                <Paragraph>Web3D Media is not responsible for any content, code or any other imprecision.
                    <Paragraph className='py-8'></Paragraph>
                Web3D Media does not provide warranties or guarantees.
                    <Paragraph className='py-8'></Paragraph>
                    In no event shall Web3D Media be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Web3D Media reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
                </Paragraph>
            </TextContainer>

            <TextContainer>
                <Headings>General Disclaimer</Headings>
                <Paragraph>The Web3D Media Service and its contents are provided "as is" and "as available" without any warranty or representations of any kind, whether express or implied. Web3D Media is a distributor and not a publisher of the content supplied by third parties; as such, Web3D Media exercises no editorial control over such content and makes no warranty or representation as to the accuracy, reliability or currency of any information, content, service or merchandise provided through or accessible via the Web3D Media Service. Without limiting the foregoing, Web3D Media specifically disclaims all warranties and representations in any content transmitted on or in connection with the Web3D Media Service or on sites that may appear as links on the Web3D Media Service, or in the products provided as a part of, or otherwise in connection with, the Web3D Media Service, including without limitation any warranties of merchantability, fitness for a particular purpose or non-infringement of third party rights. No oral advice or written information given by Web3D Media or any of its affiliates, employees, officers, directors, agents, or the like will create a warranty. Price and availability information is subject to change without notice. Without limiting the foregoing, Web3D Media does not warrant that the Web3D Media Service will be uninterrupted, uncorrupted, timely, or error-free.
                </Paragraph>
            </TextContainer>

            <TextContainer>
                <Headings>Copyright Disclaimer</Headings>
                <Paragraph>All intellectual property rights concerning these materials are vested in Web3D Media. Copying, distribution and any other use of these materials is not permitted without the written permission of Web3D Media, except and only to the extent otherwise provided in regulations of mandatory law (such as the right to quote), unless otherwise stated for certain materials.</Paragraph>
            </TextContainer>

            <TextContainer>
                <Headings>Affiliate Links Disclosure</Headings>
                <Paragraph>Web3D Media has affiliate links and in this section of the Disclaimer we will address how we use those affiliate links from other websites/companies and products. These “affiliate links” are specific URLs that contain the affiliate's ID or username.
                <Paragraph className='py-8'></Paragraph>
                In compliance with the FTC guidelines, please assume the following about links and posts on this site:
                <ul>
                    <Paragraphlist>Any/all of the links on Web3D Media are affiliate links of which we receive a small commission from sales of certain items, but the price is the same for you. As Web3D Media has grown, so have costs associated with running and maintaining it, and affiliate links are a way we help offset these costs.</Paragraphlist>
                    <Paragraphlist>If we post an affiliate link to a product, it is something that we personally use, support and would recommend without an affiliate link.</Paragraphlist>
                    <Paragraphlist>Unless otherwise noted, all reviews are of items we have purchased and we are not paid or compensated in any way.</Paragraphlist>
                </ul>
                </Paragraph>
            </TextContainer>
            <TextContainer>
                <Headings>Your Consent</Headings>
                <Paragraph>We've updated our Disclaimer to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our website, registering an account, or making a purchase, you hereby consent to our Disclaimer and agree to its terms.</Paragraph>
            </TextContainer>

            <TextContainer>
                <Headings>Changes To Our Disclaimer</Headings>
                <Paragraph>Should we update, amend or make any changes to this document so that they accurately reflect our Service and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the Service, you will be bound by the updated Disclaimer. If you do not want to agree to this or any updated Disclaimer, you can delete your account.</Paragraph>
            </TextContainer>

            <TextContainer>
                <Headings>Contact Us</Headings>
                <Paragraph>
                    Don't hesitate to contact us if you have any questions.
                    <ul>
                        <Paragraphlist>
                            Via Email: <a href="mailto:hello@web3d.media">hello@web3d.media</a>
                        </Paragraphlist>
                    </ul>
                </Paragraph>
            </TextContainer>
            </div>

        </DisclaimerNoticePage>

        <Container>
            <Footer></Footer>
        </Container>
    </div>
  )
}
