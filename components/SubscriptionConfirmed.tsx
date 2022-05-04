import styled from 'styled-components'
import {MdOutlineClose} from 'react-icons/md'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import Gif from '../public/images/subcribe-gif.gif'
import Image from 'next/image'
import Link from 'next/link'


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
   border: 2px solid #211F1F;
   box-sizing: border-box;
   border-radius: 16px;
   text-align: center;
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
   border: 4px solid;
   border-image-source: radial-gradient(50% 50% at 50% 50%, #818181 0%, rgba(129, 129, 129, 0) 100%);
   margin: 44px auto 0;
   max-width: 208px;
`

const TextDiv = styled.div`
   a{
      font-style: normal;
      line-height: 19px;
      margin-top: 44px;
   }
   p{
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
   }
`


const ShareDiv = styled.div`
   margin-top: 44px;
   h2{
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 28px;
      line-height: 15px;
   }
`

const SubscriptionConfirmed = ({closeSubscriptionModal}) => {
   return (
      <SubcriptionBody className="fixed top-0 left-0 h-screen w-full text-white flex items-center justify-center">
         <SubcriptionContianer className="relative pt-[80px]">
            <ModalClose className="absolute" onClick={() => closeSubscriptionModal()}>
               <MdOutlineClose fontSize={24}/>
            </ModalClose>
            <div className="">
               <GifWrapper>
                  <Image src={Gif} alt="gif"layout='fill'/>
               </GifWrapper>
               <TextDiv>
                  <h2 className="text-xl font-normal mt-[24px]">Superpower activated</h2>
                  <p className="max-w-[400px] break-words mx-auto mt-[20px] text-[#D3D3D3]">
                     You are now signed up for the Early Access. We will send you more information shortly.
                  </p>
               </TextDiv>
               <DivSeperator />
               <ShareDiv>
                  <div className="font-medium text-[20px]">
                     <Link href="https://twitter.com/intent/tweet?text=Just%20signed%20up%20for%20early%20access%20to%20%40web3dmedia%27s%20products.%0A%0ASign%20up%20here%20%F0%9F%91%87%0Ahttps%3A//web3d.media/?utm_source=twitter%26utm_medium=share%2Blink%26utm_id=early%2Baccess%20">
                        <a target="_blank" className="text-[#C4C4C4]">
                           Share
                        </a>
                     </Link>
                  </div>
                  <div className="flex w-full items-center justify-center mt-[28px]">
                     <div className="text-[#D3D3D3] mr-[15px] cursor-pointer">
                        <Link href="https://twitter.com/web3Dmedia">
                           <a target="_blank">
                              <BsTwitter fontSize={30}/>
                           </a>
                        </Link>
                     </div>
                     <div className="text-[#D3D3D3] mx-[15px] cursor-pointer">
                        <Link href="https://www.instagram.com/web3d.media/">
                           <a target="_blank">
                              <BsInstagram fontSize={30}/>
                           </a>
                        </Link>
                     </div>
                     <div className="text-[#D3D3D3] ml-[15px] cursor-pointer">
                        <Link href="https://www.linkedin.com/company/web3dmedia">
                           <a target="_blank">
                              <FaLinkedinIn fontSize={30}/>
                           </a>
                        </Link>
                     </div>
                  </div>
               </ShareDiv>
            </div>
         </SubcriptionContianer>
      </SubcriptionBody>
   )
}

export default SubscriptionConfirmed