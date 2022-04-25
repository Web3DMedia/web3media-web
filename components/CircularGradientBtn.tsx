import Image from 'next/image'
import styled from 'styled-components'

interface IProps {
   img: string
}

const BtnWrapper = styled.span`
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 15px;
   position: relative;
   width: 50px;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100%;
   padding: 2px 2px 2.5px 2.5px;

   &::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      border: 2.5px solid transparent;
      padding:0px;
      background: linear-gradient(135deg, #FF6EFF 0%, #0AB7F6 100%) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) ;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
   }
`
const CircularGradientBtn = ({img}: IProps) => {
   return (
      <BtnWrapper>
         <div className="bg-black w-full rounded-full h-full flex items-center justify-center z-[2]">
            <Image src={img} alt="Circular" width="13px" height="13px" />
         </div>
      </BtnWrapper>
   )
}


export default  CircularGradientBtn

