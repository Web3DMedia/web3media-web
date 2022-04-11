import styled from 'styled-components'

export const VectorWaveContainer = styled.div`
    postion: relative;
    background: url(/images/background.png) !important;
    background-size: 500px;
    background-position: center;
    background-repeat: none;
    @media (max-width: 1024px) {
    border: none;
    background-size: 500px;
  }
    @media (max-width: 550px) {
    border: none;
    background-size: 300px;
  }
`
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
   padding:80px 0;
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