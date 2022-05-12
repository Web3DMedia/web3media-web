import styled, {keyframes} from 'styled-components'

export const AccessContainer = styled.div`
   background-image:  url(/images/underlay-mesh.png);
   background-repeat: no-repeat;
   background-position:  center left;
   background-size: contain;
   z-index: 1;
`

export const colorchange = keyframes`
   0% {
   background-position: 0 50%;
   }
   50% {
   background-position: 100% 50%;
   }
   75% {
   background-position: 100% 50%;
   }
   100% {
   background-position: 0px 0px;
   }
`

export const HeaderText = styled.h2`
   font-weight: 800;
   font-size: 60px;
   line-height: 50px;
   text-align: center;
   /* padding-bottom: 42px ; */
   background-image: linear-gradient(135deg, #FF6EFF 5%, #0AB7F6 25%, #0AB7F6 30%, #FF6EFF 55%, #62FF8E 70%, #25B1FF 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-fill-color: transparent;
   background-size: 300%;
   background-position: 0%;
   -webkit-animation: ${colorchange} 20s ease-in-out 2s infinite normal;
   animation: ${colorchange} 20s ease-in-out 2s infinite normal;
   transition: background-position 5s ease-in-out;

   @media(max-width: 1920px){
      font-size: 52px;
      line-height: 50px;
      text-align: center;
   }

   @media (max-width: 768px) {
      font-size: 40px;
      line-height: 44px;
   } 

`

export const HeaderSubText = styled.p`
   font-weight: 400;
   font-size: 20px;
   line-height: 28px;

   @media (max-width: 550px) {
      font-size: 18px;
      line-height: 26px;
   }
`

export const Form = styled.form`
   display: flex;
   flex-direction: column;
`

export const Label = styled.label`
   margin: -7px 10px 0px 15px;
   padding: 0 5px;
   font-weight:800;
   font-size: 14px;
   line-height: 15px;
   background: black;
   border: none;
   z-index:2;
   position:absolute;

   span{
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
      z-index: 2;
   }
`

export const Input = styled.input<{erros:boolean}>`
   width: 480px;
   height: 56px;
   margin-bottom: 20px;
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

   @media (max-width: 1920px){
      width: 474px;
   }
   @media (max-width: 550px) {
      width: 100%;
   }

   /* @media (max-width: 550px) {
      width: 350px;
   } */
   
`
export const Button = styled.button`
   width: 100%;
   max-width: 480px;
   height: 56px;
   /* margin-top: 5px; */
   border-radius: 16px;
   
   /* @media (max-width: 550px) {
      width: 310px;
   }
   @media (max-width: 340px) {
      width: 300px;
   } */
`

export const GifDiv = styled.div`
   width: 114px;
   height: 114px;
   position: relative;
   margin: 0 auto 30px;
`