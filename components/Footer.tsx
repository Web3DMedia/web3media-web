import Image from 'next/image'
import Logo from '../public/images/logo.svg'
import Link from 'next/link'
import ArrowVector from '../public/images/small-arrow.svg'
import {FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'


const Separator = styled.div`
   width: 2.5px;
   background-color: #fff;
   height:30px;
`
const Footer = () => {
   const toggleHome = () => {
      scroll.scrollToTop()
   }
   return (
      <div className="text-white py-5 px-5 border-t border-gray-300 mt-[100px] lg:mt-[150px] xl:mt-[200px] relative w-full h-full z-[2]">
         <div className="flex items-center justify-between">
            <div className="cursor-pointer" onClick={toggleHome}>
               <Image src={Logo} alt="logo" />
            </div>
            <div className='items-center hidden sm:flex'>
               <Link href="/">
                  <a target="_blank">
                     <span className="mx-4 cursor-pointer text-[#C4C4C4] font-extrabold">Legal</span>
                  </a>
               </Link>
               <Separator/>
               <ul className="list-disc hidden sm:flex">
                  <Link href="https://www.instagram.com/web3d.media/">
                     <a target="_blank">
                        <span className="mx-4 cursor-pointer font-extrabold text-[#C4C4C4]">Instagram</span>
                     </a>
                  </Link>
                  <Link href="https://twitter.com/web3Dmedia">
                     <a target="_blank">
                        <li  className="mx-4 cursor-pointer font-extrabold text-[#C4C4C4]">Twitter</li>
                     </a>
                  </Link>
                  <Link href="https://www.linkedin.com/company/web3dmedia">
                     <a target="_blank">
                        <li  className="mx-4 cursor-pointer font-extrabold text-[#C4C4C4]">Linkedin</li>
                     </a>
                  </Link>
               </ul>
            </div>
         </div>
         <div className="flex flex-col my-5 sm:hidden">
            <Link href="/">
               <a className="flex items-center justify-between text-lg my-3">Legal. <span><Image src={ArrowVector} alt="img"/></span></a>
            </Link>
            <Link href="/">
               <a className="flex items-center justify-between text-lg my-3">Early access. <span><Image src={ArrowVector} alt="img"/></span></a>
            </Link>
         </div>
         <div className="flex items-center justify-center w-full sm:hidden">
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
            <div className="ml-2 h-9 w-9 bg-zinc-600 rounded-full flex items-center justify-center">
               <Link href="https://www.linkedin.com/company/web3dmedia">
                  <a target="_blank">
                     <FaLinkedinIn/>
                  </a>
               </Link>
            </div>
         </div>
         <div className="my-5 w-full flex items-center justify-center sm:justify-start sm:my-6">
            <p className="font-normal text-sm">2022 Web3D Media Inc. All rights reserved</p>
         </div>
      </div>
   )
}

export default Footer