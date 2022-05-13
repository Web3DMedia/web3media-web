/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//components
import DesktopNavbar from "../components/DesktopNavbar"
import Footer from "../components/Footer"
import Container from "../components/Container"
import styled from 'styled-components'

const CookiesPolicyPage = styled.div`
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

export default function cookiespolicies () {
    return (
    <div>
        <div className='font-body'>
        <DesktopNavbar></DesktopNavbar>

        <Head>
            <title>Web3Media Cookies</title>
            <meta
            name="description"
            content="Creating, building and developing animations and creators resources for the new web."
            />
            <link rel="icon" href="/images/logo.svg" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://web3d.media" />
            <meta property="og:title" content="Web3D Media" />
            <meta
            property="og:description"
            content="Creating, building and developing animations and creators resources for the new web."
            />
            <meta property="og:image" content="/images/meta-image.jpg" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://web3d.media" />
            <meta property="twitter:title" content="Web3D Media" />
            <meta
            property="twitter:description"
            content="Creating, building and developing animations and creators resources for the new web."
            />
            <meta property="twitter:image" content="/images/meta-image.jpg"></meta>
        </Head>
        <CookiesPolicyPage className='text-b4 pt-32'>
            <div className='px-8 pt-8 md:px-24 lg:px-48'>
                <div className='flex'>
                    <Link href='/legal'>
                        <a>
                            <h1 className='text-w underline text-lg'>Home </h1>
                        </a>
                    </Link>
                    <h1 className='text-b4 text-lg'>/ Cookie Policies</h1>
                </div>
 
                <div className='pt-20'>
                    <h1 className='text-6xl font-bold'>Cookie Policy</h1>
                    <p className='text-xl text-b5 pt-8 pb-20'>Updated at 2022-04-28</p>
                </div>

                                <TextContainer>
                    <Headings>Definitions and key terms</Headings>
                    <Paragraph>
                    To help explain things as clearly as possible in this Privacy Policy, every time any of these terms
                    are referenced, are strictly defined as:
                
                    <ul>
                    <Paragraphlist>Cookie: small amount of data generated by a website and saved by your web browser.It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information. </Paragraphlist>
                    <Paragraphlist>Company: when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Web3D Media Incorporated, 651 N Broad Street Suite 206 Middletown de 19709, New Castle, Delaware that is responsible for your information under this Privacy Policy. </Paragraphlist>
                    <Paragraphlist>Country: where Web3D Media or the owners/founders of Web3D Media are based, in this case is United States. </Paragraphlist>
                    <Paragraphlist>Customer: refers to the company, organization or person that signs up to use the Web3D Media Service to manage the relationships with your consumers or service users. </Paragraphlist>
                    <Paragraphlist>Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Web3D Media and use the services. </Paragraphlist>
                    <Paragraphlist>IP address: Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet. </Paragraphlist>
                    <Paragraphlist>Personnel: refers to those individuals who are employed by Web3D Media or are under contract to perform a service on behalf of one of the parties. </Paragraphlist>
                    <Paragraphlist>Personal Data: any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person. </Paragraphlist>
                    <Paragraphlist>Service: refers to the service provided by Web3D Media as described in the relative terms (if available) and on this platform. </Paragraphlist>
                    <Paragraphlist>Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you. </Paragraphlist>
                    <Paragraphlist>Website: Web3D Media's site, which can be accessed via this URL: https://web3d.media/ </Paragraphlist>
                    <Paragraphlist>You: a person or entity that is registered with Web3D Media to use the Services. </Paragraphlist>
                    </ul>
                </Paragraph>

                                <TextContainer>
                    <Headings>Introduction</Headings>
                    <Paragraph>This Cookie Policy explains how Web3D Media and its affiliates (collectively "Web3D Media", "we", "us", and "ours"), use cookies and similar technologies to recognize you when you visit our website, including without limitation https://web3d.media/ and any related URLs, mobile or localized versions and related domains / sub-domains ("Websites"). It explains what these technologies are and why we use them, as well as the choices for how to control them.</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>What is a cookie?</Headings>
                    <Paragraph>A cookie is a small text file that is stored on your computer or other internet connected device in order to identify your browser, provide analytics, remember information about you such as your language preference or login information. They're completely safe and can't be used to run programs or deliver viruses to your device.</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Why do we use cookies?</Headings>
                    <Paragraph>
                        We use first party and/or third party cookies on our website for various purposes such as:

                        <ul>
                            <Paragraphlist>To facilitate the operation and functionality of our website;</Paragraphlist>
                            <Paragraphlist>To improve your experience of our website and make navigating around them quicker and easier;</Paragraphlist>
                            <Paragraphlist>To allow us to make a bespoke user experience for you and for us to understand what is useful or of interest to you;</Paragraphlist>
                            <Paragraphlist>To analyze how our website is used and how best we can customize it;</Paragraphlist>
                            <Paragraphlist>To identify future prospects and personalize marketing and sales interactions with it;</Paragraphlist>
                            <Paragraphlist>To facilitate the tailoring of online advertising to your interests.</Paragraphlist>
                        </ul>
                    </Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>What type of cookies does Web3D Media use?</Headings>
                    <Paragraph>Cookies can either be session cookies or persistent cookies. A session cookie expires automatically when you close your browser. A persistent cookie will remain until it expires or you delete your cookies. Expiration dates are set in the cookies themselves; some may expire after a few minutes while others may expire after multiple years. Cookies placed by the website you’re visiting are called “first party cookies”.
                    <Paragraph className='py-8'></Paragraph>
                    Strictly Necessary cookies are necessary for our website to function and cannot be switched off in our systems. They are essential in order to enable you to navigate around the website and use its features. If you remove or disable these cookies, we cannot guarantee that you will be able to use our website.
                    <Paragraph className='py-8'></Paragraph>
                    We use the following types of cookies in our website:</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Essential Cookie</Headings>
                    <Paragraph>We use essential cookies to make our website work. These cookies are strictly necessary to enable core functionality such as security, network management, your cookie preferences and accessibility. Without them you wouldn't be able to use basic services. You may disable these by changing your browser settings, but this may affect how the Websites function.</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Performance and Functionality Cookies</Headings>
                    <Paragraph>These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the website as we would not be able to remember that you had logged in previously.</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Marketing Cookies</Headings>
                    <Paragraph>These account-based marketing cookies enable us to identify future prospects and personalize sales and marketing interactions with them.</Paragraph>
                </TextContainer>
                
                <TextContainer>
                    <Headings>Analytics and Customization Cookies</Headings>
                    <Paragraph>These cookies collect information that is used to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                    <Paragraph className='py-8'></Paragraph>
                    We use cookies served by Google Analytics to collect limited data directly from end-user browsers to enable us to better understand your use of our website. Further information on how Google collects and uses this data can be found at: https://www.google.com/policies/privacy/partners/. You can opt-out of all Google supported analytics on our Websites by visiting: https://tools.google.com/dlpage/gaoptout.
                    </Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Advertising Cookies</Headings>
                    <Paragraph>These cookies collect information over time about your online activity on the website and other online services to make online advertisements more relevant and effective to you. This is known as interest-based advertising. They also perform functions like preventing the same ad from continuously reappearing and ensuring that ads are properly displayed for advertisers. Without cookies, it’s really hard for an advertiser to reach its audience, or to know how many ads were shown and how many clicks they
                    received.</Paragraph>
                </TextContainer>
                
                <TextContainer>
                    <Headings>Social Media Cookies</Headings>
                    <Paragraph>These cookies are used when you share information using a social media sharing button or “like” button on our Site or you link your account or engage with our content on or through a social networking website such as Facebook, Twitter or Google+. The social network will record that you have done this. These cookies may also include certain code that has been placed on the platform to help track conversions from ads, optimize ads based on collected data, build targeted audiences for future ads, and remarket to qualified users who have already taken certain action on the platform.</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Third Party Cookies</Headings>
                    <Paragraph>Some cookies that have been set on our website are not set on a first party basis by Web3D Media. The Websites can be embedded with content from third parties to serve advertising. These third party service providers may set their own cookies on your web browser. Third party service providers control many of the performance and functionality, advertising, marketing and analytics cookies described above. We do not control the use of these third party cookies as cookies can only be accessed by the third party that originally set them.</Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>How you can manage cookies?</Headings>
                    <Paragraph>Most browsers allow you to control cookies through their 'settings' preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information. Browser manufacturers provide help pages relating to cookie management in their products.
                    <Paragraph className='py-8'></Paragraph>
                    Browser manufacturers provide help pages relating to cookie management in their products. Please see below for more information.
                    <Paragraphlist>Google Chrome</Paragraphlist>        
                    <Paragraphlist>Internet Explorer</Paragraphlist>
                    <Paragraphlist>Mozilla Firefox</Paragraphlist>
                    <Paragraphlist>Safari (Desktop)</Paragraphlist>
                    <Paragraphlist>Safari (Mobile)</Paragraphlist>
                    <Paragraphlist>Android Browser</Paragraphlist>
                    <Paragraphlist>Opera</Paragraphlist>
                    <Paragraphlist>Opera Mobile</Paragraphlist>
                </Paragraph>
                </TextContainer>

                <TextContainer>
                    <Headings>Changes To Our Cookie Policy</Headings>
                    <Paragraph>We may change our Service and policies, and we may need to make changes to this Cookie Policy so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to this Cookie Policy and give you an opportunity to review them before they go into effect. Then, if you continue to use the Service, you will be bound by the updated Cookie Policy. If you do not want to agree to this or any updated Cookie Policy, you can delete your account.</Paragraph>
                </TextContainer>
                
                <TextContainer>
                    <Headings>Your Consent</Headings>
                    <Paragraph>By using our website, registering an account, or making a purchase, you hereby consent to our Cookie Policy and agree to its terms.</Paragraph>
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

            </TextContainer>

            </div>
        </CookiesPolicyPage>

        <Container>
            <Footer></Footer>
        </Container>
    </div>
    </div>
  )
}
