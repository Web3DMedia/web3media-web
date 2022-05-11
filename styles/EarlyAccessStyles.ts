import styled from 'styled-components'

export const EarlyAccessContainer = styled.div`
   background: rgba(0, 0, 0, 0.6);
   backdrop-filter: blur(40px);
   height: 100vh;
   position: fixed;
   z-index: 20;
   width: 100%;
   top: 0;
   left: 0;
`

export const EarlyAccessInnerContainer = styled.div`
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
export const FirstText = styled.h6`
   font-weight: 800;
   font-size: 36px;
   line-height: 38px;
   padding-bottom: 20px;
`
export const SecondText = styled.h2`
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   width: 80%;
   padding-bottom: 59px;
   @media (max-width: 550px) {
      width: 100%;
   }
`
export const FirstLabel = styled.p`
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
export const Span = styled.span`
   font-weight: 400;
   font-size: 14px;
   line-height: 15px;
   z-index: 2;
`
export const Input = styled.input<{erros:boolean}>`
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
export const Button = styled.button`
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

export const GifDiv = styled.div`
   width: 114px;
   height: 114px;
   position: relative;
   margin: 0 auto 30px;
`