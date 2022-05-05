import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll';

//components
import MobileMenu from '../components/MobileMenu'
import EarlyAccess from '../components/EarlyAccess';
import Link from 'next/link';

const Navbar = styled.nav`
    border-bottom: 0.5px solid var(--B2);
    background: black;
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
const Li = styled.li`
    list-style: none;
    font-weight: 800;
    font-size: 16px;
    line-height: 17px;
    color: var(--B6);
    border-left: 0.5px solid var(--B2);
    padding: 36px 44px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
    background-image: linear-gradient(135deg, #FF6EFF 5%, #0AB7F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    }
    &:last-child {
        display:none
    }
    &:last-child:hover {
        font-size: 0px;
    }


    @media (max-width: 1024px) {
    display: none;
    border: none;
        &:last-child {
            padding: 52px 0px 52px 34px;
            display: block;
        }
    }
    @media (max-width: 550px) {
        &:last-child {
            padding: 20px 0px 20px 34px;
            display: block;
        }
    }
`
const HamMenu = styled.div`
    display: flex;
    margin: 7px 71px 7px 7px;
    width: 30px;
    height: 1px;
    background: var(--GradientOne);
    &:nth-child(2){
        width: 20px;
    }
    @media (max-width: 1024px) {
        margin: 7px 52px 7px 7px;
    }
    @media (max-width: 550px) {
        margin: 10px 20px 10px 10px;
    }
`
const DesktopNavbar = () => {
    const [showmenu, setShowmenu] = useState(false);
    const [showearlyaccess, setShowEarlyAccess] = useState<boolean>(false);
    const [cookieNav, setCookieNav] = useState<boolean>(false);
    const router = useRouter()

    useEffect(() => {
        const changeDisplay = () => {
            if(router.asPath !== '/'){
                setCookieNav(true)
            }
        }
        changeDisplay();
    },[router])
    return (
<div>
            <div className='lg:fixed lg:w-full lg:z-30'>
            <Navbar className='flex justify-between items-center relative'>
            <div className='px-4 sm:px-10 lg:px-14 xl:px-20' >
                <Link href="/">
                    <a>
                        <Image src='/images/new-logo-removebg.png' width={96} height={31} alt="logo" objectFit='contain' />
                    </a>
                </Link>
            </div>

            <ul className='flex font-display'>
                <Li onClick={() => setShowEarlyAccess(true)}>Early Access</Li>
                <Li>
                    {
                        cookieNav ?
                            (
                                <Link href='/'>
                                    <a>Products</a>
                                </Link>
                            ):
                            (
                                <ScrollLink to="products" spy={true} smooth={true} offset={-20} duration={600}>
                                    Products
                                </ScrollLink>
                            )
                    }
                </Li>
                <Li>
                    {
                        cookieNav ?
                            (
                                <Link href='/'>
                                    <a>Teams</a>
                                </Link>
                            ):
                            (
                                <ScrollLink to="teams" spy={true} smooth={true} offset={-20} duration={600}>
                                    Teams
                                </ScrollLink>
                            )
                    }
                </Li>
                <Li onClick={() => setShowmenu(true)}>
                    <HamMenu></HamMenu>
                    <HamMenu></HamMenu>
                    <HamMenu></HamMenu>
                </Li>
            </ul>

            {
                showearlyaccess &&    <EarlyAccess closeearlyaccess={setShowEarlyAccess}></EarlyAccess>
            }
        </Navbar>
        </div>
        
            <MobileMenu slide={showmenu} closemenu={setShowmenu}></MobileMenu>
</div>
    )
}

export default DesktopNavbar
