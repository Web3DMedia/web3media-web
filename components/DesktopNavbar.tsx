import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

//components
import MobileMenu from '../components/MobileMenu'

const Navbar = styled.nav`
    border-bottom: 0.5px solid var(--B2);
    background: url(/images/background.png);
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
    padding: 47px 44px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
        font-size:18px;
    }
    &:last-child {
        padding: 40px 0px 0px 34px;
    }
    &:last-child:hover {
        font-size: 16px;
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
    return (
        <Navbar className='flex justify-between items-center relative'>
            <div className='px-10 lg:px-14 xl:px-20' >
                <Image src='/images/logo.svg' width={76} height={31} alt="logo" />
            </div>

            <ul className='flex font-display'>
                <Li >Early Access</Li>
                <Li>Team</Li>
                <Li>About</Li>
                <Li onClick={() => setShowmenu(true)}>
                    <HamMenu></HamMenu>
                    <HamMenu></HamMenu>
                    <HamMenu></HamMenu>
                </Li>
            </ul>

            <MobileMenu slide={showmenu} closemenu={setShowmenu}></MobileMenu>
            
        </Navbar>
    )
}

export default DesktopNavbar