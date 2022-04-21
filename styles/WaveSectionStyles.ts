import styled from 'styled-components'
export const WaveContainer = styled.div`
   width: 100%;
   height: 160px;
   border: none;
   position: relative;
   background-image: url(/images/background.png), url(/images/wave.svg) !important;
   background-size: contain, cover;
   background-repeat: repeat, no-repeat;
   background-position: center bottom,center;
   @media screen and (max-width:768px) {
         background-repeat: no-repeat;
   }
   @media screen and (max-width:640px){
      height: 120px;
      margin-top: 20px;
   }
`

export const PinkContainer = styled.div`
   width: 100%;
   height: 160px;
   border: none;
   position: relative;
   background-image: url(/images/background.png), url(/images/wave.svg);
   background-size: contain, cover;
   background-repeat: repeat, no-repeat;
   background-position: center bottom,center;
   margin: 0;
   @media screen and (max-width:768px) {
         background-repeat: no-repeat;
   }
   @media screen and (max-width:640px){
      height: 120px;
      margin-bottom: 20px;
   }
`