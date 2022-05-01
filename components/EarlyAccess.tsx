import React, { useState } from "react"
import cn from "classnames"
import styled from "styled-components"
import Image from "next/image"
import { Spinner } from "./Spinner"
import { RiCloseLine } from "react-icons/ri"

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
const MobileMenuClose = styled.div`
  span {
    display: flex;
    position: absolute;
    right: 0px;
    top: 0px;
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
  margin: -10px 10px 0px 20px;
  padding: 0 5px;
  font-weight: 800;
  font-size: 14px;
  line-height: 15px;
  background: black;
  border: none;
  z-index: 2;
  position: absolute;
`
const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  z-index: 2;
`
const Input = styled.input<{ erros: boolean }>`
  width: 476px;
  height: 56px;
  margin-bottom: 43px;
  border-radius: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 800;
  padding-left: 17px;
  background: transparent;
  border: ${({ erros }) => (erros ? "2px solid red" : "2px solid var(--B2)")};
  color: ${({ erros }) => (erros ? "red" : "var(--W)")};
  opacity: 1;
  &:nth-child(4) {
    margin-bottom: 0px;
  }
  ::placeholder {
    color: ${({ erros }) => (erros ? "red" : "var(--B3)")};
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
const EarlyAccess = ({ closeearlyaccess }) => {
  const [nameLabel, setNameLabel] = useState("")
  const [emailLabel, setEmailLabel] = useState("")
  const [loading, setLoading] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [erros, setErrors] = useState(false)
  const [error, setError] = useState("")

  const handleSave = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (emailLabel.trim() === "" || nameLabel.trim() === "") {
      setError("Please all fields are required")
      setErrors(true)
      return true
    }

    setLoading(true)
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({ name: nameLabel, email: emailLabel }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        setConfirm(true)
        setError("")
        setNameLabel("")
        setEmailLabel("")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const isValid = Boolean(nameLabel) && Boolean(emailLabel)

  return (
    <EarlyAccessContainer>
      <EarlyAccessInnerContainer>
        {confirm === false && (
          <div className="">
            <CloseButton onClick={() => closeearlyaccess(false)} />

            <FirstText className="font-display text-w">
              Get Early Access
            </FirstText>
            <SecondText className="font-display text-b5">
              Sign up to get early access on updates on our products{" "}
            </SecondText>

            <form onSubmit={handleSave}>
              <FirstLabel className="font-display text-b4">
                First name <Span className="text-main">*</Span>
              </FirstLabel>
              <Input
                className="font-body"
                erros={undefined}
                type="text"
                placeholder="Enter your first name"
                onChange={e => setNameLabel(e.target.value)}
                value={nameLabel}
              />

              <FirstLabel
                className={
                  erros ? "font-display text-red-600" : "font-display text-b4"
                }
              >
                Email address
                <Span className={erros ? "text-red-600" : "text-main"}>*</Span>
              </FirstLabel>
              <Input
                className="font-body"
                erros={erros}
                placeholder="Enter email address"
                onChange={e => setEmailLabel(e.target.value)}
                value={emailLabel}
              />
              <p className="disabled: ml-6 pt-2 pb-11 font-body text-red-600">
                {error}
              </p>

              <Button
                type="submit"
                className={cn(
                  isValid ? "bg-main" : "bg-b3",
                  "font-body text-w"
                )}
                disabled={loading || !isValid}
              >
                <span className="relative flex items-center justify-center space-x-4">
                  {!loading ? (
                    <span>Submit</span>
                  ) : (
                    <Spinner size={28} className="inline-block" />
                  )}
                </span>
              </Button>
            </form>
          </div>
        )}

        {confirm === true && (
          <div className="text-center text-w">
            <CloseButton onClick={() => closeearlyaccess(false)} />

            <div className="pb-20">
              <Image
                src="/images/confirmation.png"
                width={100}
                height={92}
                alt="logo"
              />
            </div>

            <h2 className="m-auto w-2/3 pb-36 font-body text-lg font-extrabold">
              Your response has been received, check your email to confirm your
              email address
            </h2>

            <Image
              src="/images/close-confirm.png"
              width={156}
              height={56}
              alt="close confirmation"
              onClick={() => closeearlyaccess(false)}
            />
          </div>
        )}
      </EarlyAccessInnerContainer>
    </EarlyAccessContainer>
  )
}

const CloseButton = ({ onClick }) => {
  return (
    <span className="absolute top-0 right-0 p-4" onClick={onClick}>
      <button className="relative inline-flex h-12 w-12 items-center justify-center">
        <RiCloseLine size={30} className="text-b3" />
      </button>
    </span>
  )
}

export default EarlyAccess
