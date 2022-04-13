import styled from 'styled-components'
export const WaveContainer = styled.div`
   width: 100%;
   height: 160px;
   position: relative;
   background-image: url(/images/background.png), url(/images/wave.svg) !important;
   background-size: 500px, cover;
   background-repeat: no-repeat;
   background-position: center;
   margin-top: 10px;
   margin-bottom: 10px;

   @media screen and (max-width:640px){
      height: 120px;
   }
`

export const PinkContainer = styled.div`
   width: 100%;
   padding:80px 0;
   position: relative;
   background-image: url(/images/background.png), url(/images/wave.svg) !important;
   background-size: 500px, cover;
   background-repeat: no-repeat;
   background-position: center;
   @media screen and (max-width:768px) {
         background-repeat: no-repeat;
   }
   @media screen and (max-width:640px){
      height: 120px;
   }
`