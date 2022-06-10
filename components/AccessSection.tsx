import { useState, useEffect, useRef } from "react"
import lottie from 'lottie-web'
import axios from "axios"
import {
   AccessContainer,
   HeaderText,
   HeaderSubText,
   Form,
   Label,
   Input,
   Button,
   GifDiv
} from '../styles/AccessPageStyles'

const AccessSection = () => {
   const [nameLabel, setNameLabel] = useState<string>("")
   const [emailLabel, setEmailLabel] = useState("")
   const [loading, setLoading] = useState(false)
   const [confirm, setConfirm] = useState(false)
   const [erros, setErrors] = useState(false)
   const [error, setError] = useState("")
   const container = useRef(null)

   const handleSubmit = (e: { preventDefault: () => void }) => {
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
      <AccessContainer>
         {
            confirm === false && 
            <div>
               <HeaderText className="mb-5">Get Early Access</HeaderText>
               <HeaderSubText className="text-[#D3D3D3] break-words text-center max-w-[409px] mx-auto">
                  Sign up to get updates and early/beta access to our products
               </HeaderSubText>
               <Form className="h-full 4xl:pl-[30px] py-10" onSubmit={handleSubmit}>
                  <div className="relative mb-5">
                     <Label className='text-b4 font-body'>First name <span>*</span></Label>
                     <Input className='font-body' erros={undefined} type="text" placeholder='Enter your name' onChange={e => setNameLabel(e.target.value)} value={nameLabel} />
                  </div>

                  <div className="relative my-5">
                     <Label className='text-b4 font-body'>Email <span>*</span></Label>
                     <Input className='font-body' erros={undefined} type="text" placeholder='Enter your email' onChange={e => setEmailLabel(e.target.value)} value={emailLabel} />
                  </div>
                  <p className='text-red-600 break-words max-w-[450px] pb-5 font-body disabled:'>{error}</p>
                  {
                     (nameLabel && emailLabel )  
                        ? ( 
                           <Button type="submit" className="text-w bg-main font-body">
                              Submit
                           </Button>
                        ) 
                        : (
                           <Button type="submit" className="text-w bg-b3 font-body" disabled={true}>
                              Submit
                           </Button>
                        )
                  }
               </Form>
            </div>
         }

         {
            confirm === true && 
               <div className='text-w text-center sm:mb-[100px] 4xl:mb-[300px]'>
                  <GifDiv ref={container}>
                  </GifDiv>
                  <p className='max-w-[420px] mx-auto'>
                     One more step to activate your superpower. Check your inbox and confirm your email
                  </p>
               </div>
         }
      </AccessContainer>
   )
}

export default AccessSection

