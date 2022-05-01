import React, {useState} from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const EarlyAccessContainer = styled.div`
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(40px);
        height: 100vh;
        position: fixed;
        z-index: 7;
        width:100%;
        top:0;
`
const EarlyAccessInnerContainer = styled.div`
    background: url(/images/background.png), black;
    background-size: 500px;
    border-radius:16px;
    display:flex;
    flex-direction:column;
    width:556px;
    margin:auto;
    padding: 72px 42px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    @media (max-width: 550px) {
        width:350px;
        padding: 52px 20px;
    }
`
const MobileMenuClose = styled.div`
    display: flex;
    float: right;
    margin: -10px;
    width: 21px;
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
    padding-bottom:20px
`
const SecondText = styled.h2`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width:80%;
    padding-bottom:59px;
    @media (max-width: 550px) {
        width: 100%;
    }
`
const FirstLabel = styled.p`
    margin: -10px 10px 0px 20px;
    padding: 0 5px;
    background: black;
    border: none;
    z-index:2;
    position:absolute;
`
const Span = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 15px:
    z-index:2;
`
const Input = styled.input<{ erros: boolean }>`
  width: 100%;
  height: 56px;
  margin-bottom: 43px;
  border-radius: 16px;
  padding-left: 17px;
  background: transparent;
  border: ${({ erros }) => (erros ? "2px solid red" : "2px solid var(--B2)")};
  color: ${({ erros }) => (erros ? "red" : "var(--W)")};
  opacity: 1;
  &:nth-child(4) {
    margin-bottom: 0px;
  }
  ::placeholder {
    color: ${({ erros }) => (erros ? "red" : "var(--W)")};
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
  height: 47px;
  margin-top: 5px;
  background: black;
  border: 2px solid var(--Main);
  border-radius: 16px;
  @media (max-width: 550px) {
    width: 310px;
  }
  @media (max-width: 340px) {
    width: 300px;
  }
`
const EarlyAccess = ({ closeearlyaccess }) => {
  const [nameLabel, setNameLabel] = useState("")
  const [emailLabel, setEmailLabel] = useState("")

  const [erros, setErrors] = useState(false)
  const [error, setError] = useState("")

  const handleSave = e => {
    // e.preventDefault()
    // if (emailLabel === "") {
    //   setError("please enter a valid email address")
    //   setErrors(true)
    //   setErrors(false)
    //   return true
    // } else {
    //   setError("")
    //   setNameLabel("")
    //   setEmailLabel("")
    //   return false
    // }
  }

  return (
    <EarlyAccessContainer>
      <EarlyAccessInnerContainer>
        <ul className="pb-4" onClick={() => closeearlyaccess(false)}>
          <li>
            <MobileMenuClose></MobileMenuClose>
            <MobileMenuClose></MobileMenuClose>
            <MobileMenuClose></MobileMenuClose>
          </li>
        </ul>

        <FirstText className="font-display text-w">Get Early Access</FirstText>
        <SecondText className="font-display text-b5">
          Sign up to get early access on updates on our products
        </SecondText>

        <form onSubmit={handleSave}>
          <FirstLabel className="font-display text-b4">
            First name <Span className="text-main">*</Span>
          </FirstLabel>
          <Input
            className="font-body placeholder:opacity-50"
            erros={undefined}
            type="text"
            placeholder="Enter your first name"
            onChange={e => setNameLabel(e.target.value)}
            value={nameLabel}
          ></Input>

          <FirstLabel
            className={
              erros ? "font-display text-red-600" : "font-display text-b4"
            }
          >
            Email address{" "}
            <Span className={erros ? "text-red-600" : "text-main"}>*</Span>
          </FirstLabel>
          <Input
            className="font-body placeholder:opacity-50"
            erros={erros}
            placeholder="Enter email address"
            onChange={e => setEmailLabel(e.target.value)}
            value={emailLabel}
          />
          <p className="disabled: ml-6 pt-2 pb-11 font-body text-red-600">
            {error}
          </p>

          <Button type="submit" className="border-main font-body text-w">
            Submit
          </Button>
        </form>
      </EarlyAccessInnerContainer>
    </EarlyAccessContainer>
  )
}
export default EarlyAccess