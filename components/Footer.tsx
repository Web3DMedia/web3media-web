import Image from 'next/image'
import Logo from '../public/Logo.svg'
import Link from 'next/link'
import ArrowVector from '../public/images/smallArrowVector.svg'
import {FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
   return (
      <div className="text-white py-5 px-5 sm:border-t border-gray-400">
         <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" />

            <ul className="list-disc hidden sm:flex">
               <li className="mx-5">Instagram</li>
               <li className="mx-5">Twitter</li>
               <li className="mx-5">Linkedin</li>
            </ul>
         </div>
         <div className="flex flex-col my-5 sm:hidden">
            <Link href="/about">
               <a className="flex items-center justify-between text-lg my-3">About. <span><Image src={ArrowVector} alt="img"/></span></a>
            </Link>
            <Link href="/about">
               <a className="flex items-center justify-between text-lg my-3">Early access. <span><Image src={ArrowVector} alt="img"/></span></a>
            </Link>
            <Link href="/about">
               <a className="flex items-center justify-between text-lg my-3">Team. <span><Image src={ArrowVector} alt="img"/></span></a>
            </Link>
         </div>
         
         <div className="flex items-center justify-center w-full sm:hidden">
            <div className="mr-2 h-9 w-9 bg-zinc-600 rounded-full flex items-center justify-center">
               <Link href="/about">
                  <a>
                     <FaTwitter/>
                  </a>
               </Link>
            </div>
            <div className="mx-2 h-9 w-9 bg-zinc-600 rounded-full flex items-center justify-center">
               <Link href="/about">
                  <a>
                     <FaInstagram/>
                  </a>
               </Link>
            </div>
            <div className="ml-2 h-9 w-9 bg-zinc-600 rounded-full flex items-center justify-center">
               <Link href="/about">
                  <a>
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