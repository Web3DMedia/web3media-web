import { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/images/new-logo.jpg'
import Link from 'next/link'
import ArrowVector from '../public/images/small-arrow.svg'
import {FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import EarlyAccess from '../components/EarlyAccess';
import {animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'


const FooterContainer = styled.div`

`
const TopSeperator = styled.div`
   width: 100%;
   height: 0.2px;
   background-color: #D3D3D3;
   opacity: .4;
   margin-bottom:32px;

   @media screen and (max-width: 640px){
      margin-bottom: 24px;
   }
`

const Separator = styled.div`
   width: 2px;
   background-color: #C4C4C4;
   height:20px;
`
const Footer = () => {

   const toggleHome = () => {
      scroll.scrollToTop()
   }

   const [showmenu, setShowmenu] = useState(false);
   const [showearlyaccess, setShowEarlyAccess] = useState<boolean>(false)
   return (
      <>

         {
            showearlyaccess && <EarlyAccess closeearlyaccess={setShowEarlyAccess}></EarlyAccess>
         }
         <FooterContainer className="text-white py-5 px-2 pt-[100px] lg:px-5 lg:pt-[150px] xl:pt-[200px] relative w-full h-full z-[2]">
            <TopSeperator/>
            <div className="flex items-center justify-between pl-2 md:pl-5 lg:px-5">
               <div className="flex items-center">
                  <div className="cursor-pointer mr-5" onClick={toggleHome}>
                     <Image src={Logo} width={76} height={31} objectFit="cover" alt="logo" />
                  </div>
                  <div className="w-full items-center justify-center hidden lg:flex">
                     <p className="font-normal text-sm text-[#C4C4C4]"> &copy;2022 Web3D Media Inc. All rights reserved</p>
                  </div>
               </div>
               <div className='items-center hidden lg:flex'>
                  <Link href="/legal">
                     <a>
                        <span className="mx-4 cursor-pointer lg:text-sm xl:text-base text-[#C4C4C4] font-normal">Legal</span>
                     </a>
                  </Link>
                  <Separator/>
                  <ul className="list-disc hidden sm:flex">
                     <Link href="https://www.instagram.com/web3d.media/">
                        <a target="_blank">
                           <span className="mx-4 cursor-pointer lg:text-sm xl:text-base text-[#C4C4C4] font-normal">Instagram</span>
                        </a>
                     </Link>
                     <Link href="https://twitter.com/web3Dmedia">
                        <a target="_blank">
                           <li  className="mx-4 cursor-pointer font-normal lg:text-sm xl:text-base text-[#C4C4C4]">Twitter</li>
                        </a>
                     </Link>
                     <Link href="https://www.linkedin.com/company/web3dmedia">
                        <a target="_blank">
                           <li  className="ml-4 cursor-pointer font-normal lg:text-sm xl:text-base text-[#C4C4C4]">Linkedin</li>
                        </a>
                     </Link>
                  </ul>
               </div>
            </div>

            <div className="flex flex-col my-5 lg:hidden px-2 md:px-5">
               <Link href='/legal'>
                  <a className="flex items-center justify-between text-lg my-3 font-normal">Legal. <span><Image src={ArrowVector} alt="img"/></span></a>
               </Link>
                  <a className="flex items-center justify-between text-lg my-3 font-normal" onClick={() => setShowEarlyAccess(true)}>Early access. <span><Image src={ArrowVector} alt="img"/></span></a>
            </div>
            <div className="flex items-center justify-center w-full lg:hidden my-6">
               <div className="mr-2 h-9 w-9 bg-zinc-600 rounded-full flex items-center justify-center">
                  <Link href="https://twitter.com/web3Dmedia">
                     <a target="_blank">
                        <FaTwitter/>
                     </a>
                  </Link>
               </div>
               <div className="mx-2 h-9 w-9 bg-zinc-600 rounded-full flex items-center justify-center">
                  <Link href="https://www.instagram.com/web3d.media/">
                     <a target="_blank">
                        <FaInstagram/>
                     </a>
                  </Link>
               </div>
               <div className="mx-2 h-9 w-9 bg-zinc-600 rounded-full flex items-center justify-center">
                  <Link href="https://www.linkedin.com/company/web3dmedia">
                     <a target="_blank">
                        <FaLinkedinIn/>
                     </a>
                  </Link>
               </div>
            </div>
            <div className="my-5 w-full flex items-center justify-center lg:hidden sm:my-6">
               <p className="font-normal text-sm text-[#C4C4C4]"> &copy;2022 Web3D Media Inc. All rights reserved</p>
            </div>
         </FooterContainer>
      </>
   )
}

export default Footer