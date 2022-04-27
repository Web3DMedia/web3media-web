import styled from 'styled-components'
export const WaveContainer = styled.div`
   width: 100%;
   height: 250px;
   border: none;
   position: relative;
   background-image: url(/images/wave.svg), url(/images/background.png) !important;
   background-size: 100%, contain;
   background-repeat: no-repeat, repeat;
   background-position: center, left top;
   margin: 0;

   @media screen and (max-width:640px){
      height: 120px;
      margin-top: 20px;
   }
`

export const PinkContainer = styled.div`
   width: 100%;
   height: 250px;
   border: none;
   position: relative;
   background-image: url(/images/background.png), url(/images/wave.svg);
   background-size: contain, 100%;
   background-repeat: repeat, no-repeat;
   background-position: center bottom,center;
   margin: 0;

   @media screen and (max-width:640px){
      height: 120px;
      margin-bottom: 20px;
   }
`