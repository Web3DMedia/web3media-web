import styled from 'styled-components'
export const WaveContainer = styled.div`
   width: 100%;
   height: 250px;
   border: none;
   position: relative;
   background-image: url(/images/wave.svg), url(/images/background.png) !important;
   background-size: 100%, 500px;
   background-repeat: no-repeat, repeat;
   background-position: center, left top;
   margin: 0;
    @media (max-width: 1024px) {
        background-size: 100%, 500px;
    }
    @media screen and (max-width:640px){
      height: 120px;
      margin-top: 20px;
   }
    @media (max-width: 550px) {
        background-size: 100%, 300px;
    }
   
`

export const PinkContainer = styled.div`
   width: 100%;
   height: 250px;
   border: none;
   position: relative;
   background-image: url(/images/background.png), url(/images/wave.svg);
   background-size: 500px, 100%;
   background-repeat: repeat, no-repeat;
   background-position: center bottom,center;
   margin: 0;
    @media (max-width: 1024px) {
        background-size: 500px, 100%;
    }
    @media screen and (max-width:640px){
      height: 120px;
      margin-top: 20px;
   }
    @media (max-width: 550px) {
        background-size: 500px, 100%;
    }
`