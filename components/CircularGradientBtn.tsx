import Image from 'next/image'
import styled from 'styled-components'

const BtnWrapper = styled.button`
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

   &::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      border: 1.8px solid transparent;
      background: linear-gradient(135deg, #FF6EFF 0%, #0AB7F6 100%) border-box;
      /* mask: linear-gradient(135deg, #FF6EFF 0%, #0AB7F6 100%); */
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
   }
`
const CircularGradientBtn = ({img}) => {
   return (
      <BtnWrapper>
         <Image src={img} alt="Circular"/>
      </BtnWrapper>
   )
}


export default  CircularGradientBtn

