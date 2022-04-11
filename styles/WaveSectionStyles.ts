import styled from 'styled-components'

export const WaveContainer = styled.div`
   width: 100%;
   height: 160px;
   position: relative;
   background: black;
   background-image: url(/images/wave.svg) !important;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   margin-top: 20px;

   @media screen and (max-width:640px){
      height: 120px;
      background-color: red;
   }
`

export const PinkContainer = styled.div`
   width: 100%;
   height: 160px;
   position: relative;
   background: black;
   background-image: url(/images/wave.svg) !important;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   margin-bottom: 20px;

   @media screen and (max-width:640px){
      height: 120px;
      background-color: red;
   }
`