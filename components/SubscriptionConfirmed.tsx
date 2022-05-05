import styled from 'styled-components'
import {MdOutlineClose} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import Link from 'next/link'
import lottie from 'lottie-web'
import {useEffect, useRef} from 'react'

const SubcriptionBody = styled.div`
   background: rgba(0, 0, 0, 0.6);
   backdrop-filter: blur(40px);
   z-index: 7;
   transition: all 0.5s ease-in-out;
`

const SubcriptionContianer = styled.div`
   width: 556px;
   height: 571px;
   background: url(/images/background.png), black;
   background-size: 500px;
   border: 2px solid #211F1F;
   box-sizing: border-box;
   border-radius: 16px;
   text-align: center;

   @media (max-width: 550px) {
    width: 350px;
    padding: 52px 20px;
  }
` 

const ModalClose = styled.div`
   color: rgba(196, 196, 196, 1);
   height: 15.157896041870117px;
   width: 15.157896041870117px;
   top: 15px;
   right: 20px;
   cursor: pointer;
`

const GifWrapper = styled.div`
   width: 114px;
   height: 114px;
   position: relative;
   margin: 0 auto;
`

const DivSeperator = styled.div`
   background: #818181;
   height: .1px;
   margin: 44px auto 0;
   max-width: 208px;
`

const TextDiv = styled.div`
   p{
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }
`


const ShareDiv = styled.div`
   margin-top: 40px;
   h2{
      font-weight: 400;
      font-size: 20px;
      line-height: 19px;
      margin-bottom: 20px;
   }

   p{ 
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #D3D3D3;
   }

   button{
      display: flex;
      background: rgba(10, 183, 246, 1);
      border-radius: 8px;
      margin: 20px auto;
      align-items: center;
      justify-content: center;
      padding: 12px 24px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
   }
`

const SubscriptionConfirmed = ({closeSubscriptionModal}) => {
   const container = useRef(null)
   useEffect(() => {
      lottie.loadAnimation({
         container: container.current,
         renderer: 'svg',
         loop:true,
         autoplay: true,
         animationData: require('../assets/lottie/success.json')
      })
   }, [])
   return (
      <SubcriptionBody className="fixed top-0 left-0 h-screen w-full text-white flex items-center justify-center">
         <SubcriptionContianer className="relative pt-[80px]">
            <ModalClose className="absolute" onClick={() => closeSubscriptionModal()}>
               <MdOutlineClose fontSize={24}/>
            </ModalClose>
            <div className="">
               <GifWrapper ref={container}>
               </GifWrapper>
               <TextDiv>
                  <h2 className="text-xl font-normal mt-[24px]">Superpower activated</h2>
                  <p className="max-w-[400px] break-words mx-auto mt-[20px] text-[#D3D3D3]">
                     You are now signed up for the Early Access. We will send you more information shortly.
                  </p>
               </TextDiv>
               <DivSeperator />
               <ShareDiv>
                  <h2 className="text-white">Your first mission</h2>
                  <p>Share and help others join with the button below</p>
                  <button className="text-white">
                     <BsTwitter className="mr-[10px]" fontSize={22}/>
                     <Link href="https://twitter.com/intent/tweet?text=Just%20signed%20up%20for%20early%20access%20to%20%40web3dmedia%27s%20products.%0A%0ASign%20up%20here%20%F0%9F%91%87%0Ahttps%3A//web3d.media/?utm_source=twitter%26utm_medium=share%2Blink%26utm_id=early%2Baccess%20">
                        <a target="_blank">
                           Share on Twitter
                        </a>
                     </Link>
                  </button>
               </ShareDiv>
            </div>
         </SubcriptionContianer>
      </SubcriptionBody>
   )
}

export default SubscriptionConfirmed 
