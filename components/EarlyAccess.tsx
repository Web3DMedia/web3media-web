import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import Image from "next/image"
import { RiCloseLine } from "react-icons/ri"
import lottie from 'lottie-web'
import {
  EarlyAccessContainer,
  EarlyAccessInnerContainer,
  FirstText,
  SecondText,
  FirstLabel,
  Span,
  Input,
  Button,
  GifDiv
} from '../styles/EarlyAccessStyles'

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
  }, [confirm])

  return (
    <EarlyAccessContainer>
        <EarlyAccessInnerContainer>
        {
            confirm===false &&  <div> 
              <CloseButton onClick={() => closeearlyaccess(false)}></CloseButton>
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
              <CloseButton onClick={() => closeearlyaccess(false)}></CloseButton>

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
