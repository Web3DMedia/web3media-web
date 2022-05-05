import React, { useState } from "react"
import axios from "axios"
import cn from "classnames"
import styled from "styled-components"
import Image from "next/image"
import { Spinner } from "./Spinner"
import { RiCloseLine } from "react-icons/ri"
import lottie from 'lottie-web'
import {useEffect, useRef} from 'react'

const EarlyAccessContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(40px);
  height: 100vh;
  position: fixed;
  z-index: 7;
  width: 100%;
  top: 0;
  left: 0;
`

const EarlyAccessInnerContainer = styled.div`
  border: 2px solid #211f1f;
  background: url(/images/background.png), black;
  background-size: 500px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 556px;
  padding: 72px 42px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 550px) {
    width: 350px;
    padding: 52px 20px;
  }
`
const MobileMenuClose = styled.span`
    display: flex;
    position: absolute;
    right: 20px;
    top: 45px;
    width: 20px;
    height: 2px;
    cursor: pointer;
    padding: 0px;
    background: var(--B4);
    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(1) {
      transform: translateY(-12px) rotate(-45deg);
    }

    &:nth-child(3) {
      transform: translateY(-12px) rotate(45deg);
    }
`
const FirstText = styled.h6`
  font-weight: 800;
  font-size: 36px;
  line-height: 38px;
  padding-bottom: 20px;
`
const SecondText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 80%;
  padding-bottom: 59px;
  @media (max-width: 550px) {
    width: 100%;
  }
`
const FirstLabel = styled.p`
    margin: -7px 10px 0px 15px;
    padding: 0 5px;
    font-weight:800;
    font-size: 14px;
    line-height: 15px;
    background: black;
    border: none;
    z-index:2;
    position:absolute;
`
const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  z-index: 2;
`
const Input = styled.input<{erros:boolean}>`
    width: 476px;
    height: 56px;
    margin-bottom: 43px;
    border-radius:16px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 800;
    outline:none;
    padding-left: 17px; 
    background: transparent;
    border: ${({erros}) => erros ? '2px solid red' :  '2px solid var(--B2)'};
    color: ${({erros}) => erros ? 'red' :  'var(--W)'};
    opacity:1;
    &:focus {
        border: 2px solid var(--W);
    }
    &:nth-child(4) {
        margin-bottom: 0px;
    }
    ::placeholder {
        color: ${({erros}) => erros ? 'red' :  'var(--B3)'};
        font-weight: 200;
    }
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background 5000s ease-in-out 0s;
      -webkit-text-fill-color: var(--W) !important;
    }
    @media (max-width: 550px) {
        width: 310px;
    }
    @media (max-width: 340px) {
        width: 300px;
    }
`
const Button = styled.button`
  width: 476px;
  height: 56px;
  margin-top: 5px;
  border-radius: 16px;
  @media (max-width: 550px) {
    width: 310px;
  }
  @media (max-width: 340px) {
    width: 300px;
  }
`

const GifDiv = styled.div`
  width: 114px;
  height: 114px;
  position: relative;
  margin: 0 auto 30px;
`
const EarlyAccess = ({ closeearlyaccess }) => {
  const [nameLabel, setNameLabel] = useState("")
  const [emailLabel, setEmailLabel] = useState("")
  const [loading, setLoading] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [erros, setErrors] = useState(false)
  const [error, setError] = useState("")

  const handleSave = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setError("")

    if (emailLabel.trim() === "" || nameLabel.trim() === "") {
      setError("Please all fields are required")
      setErrors(true)
      return true
    }

    setLoading(true)
    axios
      .post("/api/mail", { name: nameLabel, email: emailLabel })
      .then(() => {
        setConfirm(true)
        setError("")
        setNameLabel("")
        setEmailLabel("")
      })
      .catch((err) => {
        setError(err.response.data?.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const isValid = Boolean(nameLabel) && Boolean(emailLabel)
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop:true,
      autoplay: true,
      animationData: require('../assets/lottie/sent.json')
    })
  }, [])

  return (
    <EarlyAccessContainer>
        <EarlyAccessInnerContainer>
        {
            confirm===false &&  <div>
                        <ul className='pb-4' onClick={() => closeearlyaccess(false)}>
                            <li>
                                <MobileMenuClose></MobileMenuClose>
                                <MobileMenuClose></MobileMenuClose>
                                <MobileMenuClose></MobileMenuClose>
                            </li>
                        </ul>

                    <FirstText className='text-w font-display'>Get Early Access</FirstText>
                    <SecondText className='text-b5 font-display'>Sign up to get early access on updates on our products </SecondText>

                    <form onSubmit={handleSave}>
                        <FirstLabel className='text-b4 font-body'>First name<Span className='text-main'>*</Span></FirstLabel>
                        <Input className='font-body' erros={undefined} type="text" placeholder='Enter your firstname' onChange={e => setNameLabel(e.target.value)} value={nameLabel} ></Input>
                    
                        <FirstLabel className={erros ? 'text-red-600 font-body' :'text-b4 font-display'}>Email address <Span className={erros ? 'text-red-600' :'text-main'}>*</Span></FirstLabel>
                        <Input className='font-body' erros={erros} placeholder='Enter email address' onChange={e => setEmailLabel(e.target.value)} value={emailLabel}></Input>
                        <p className='text-red-600 pt-2 ml-6 pb-11 font-body disabled:'>{error}</p>

                        {
                            (nameLabel && emailLabel ) ? 
                            (    <Button type="submit" className="text-w bg-main font-body">
                                    Submit
                                </Button>) 
                                : 
                            (
                                <Button type="submit" className="text-w bg-b3 font-body" disabled={true}>
                                    Submit
                                </Button>
                            )
                        }
                        
                    </form>
                </div>
        }
        {
            confirm===true && <div className='text-w text-center'>

                <ul className='pb-24' onClick={() => closeearlyaccess(false)}>
                    <li className="cursor-pointer">
                        <MobileMenuClose></MobileMenuClose>
                        <MobileMenuClose></MobileMenuClose>
                        <MobileMenuClose></MobileMenuClose>
                    </li>
                </ul>

            <GifDiv ref={container}>
            </GifDiv>

            <h2 className='w-2/3 m-auto text-lg pb-36 font-body font-extrabold'>
                One more step to activate your superpower. Check your inbox and confirm your email address.
            </h2>

            <Image
              src="/images/close-confirm.png"
              width={156}
              height={56}
              alt="close confirmation"
              onClick={() => closeearlyaccess(false)}
              className="cursor-pointer"
            />
          </div>
        }
      </EarlyAccessInnerContainer>
    </EarlyAccessContainer>
  )
}

const CloseButton = ({ onClick }) => {
  return (
    <span className="absolute top-0 right-0 p-4" onClick={onClick}>
      <button className="group relative inline-flex h-12 w-12 items-center justify-center">
        <RiCloseLine size={30} className="text-b3 group-hover:text-main" />
      </button>
    </span>
  )
}

export default EarlyAccess
