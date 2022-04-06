import styled, {keyframes} from 'styled-components'
import Image from 'next/image'
import EarthGif from '../../public/images/Earth.gif'
import ClementDark from '../../public/images/ClementDark.png'

export const TeamWrapper = styled.div`
   width: 597px;
   height: 597px;
   position: relative;
   cursor: pointer;

   @media screen and (max-width:1920px){
      width: 500.68px;
      height: 500.68px;
   }

   @media screen and (max-width:1024px){
      width: 461.68px;
      height: 461.68px;
   }

   @media screen and (max-width:640px){
      width: 287.21px;
      height: 288px;
   }
`

export const FirstTeamDiv = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top:50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 100%;
   z-index: 1;

   &::before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 100%;
      border: 1px dotted rgba(129, 129, 129, 1);
   }

   @media screen and (max-width:1920px){
      width: 500.68px;
      height: 500.68px;
   }

   @media screen and (max-width:1024px){
      width: 461.68px;
      height: 461.68px;
   }

   @media screen and (max-width:640px){
      width: 287.21px;
      height: 288px;
   }

`

export const SecondTeamDiv = styled.div`
   width: 390px;
   height: 390px;
   position: absolute;
   top:50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 100%;
   z-index: 2;

   &::before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 100%;
      border: 1px dotted rgba(129, 129, 129, 1);
   }

   @media screen and (max-width:1920px){
      width: 330.68px;
      height: 330.68px;
   }

   @media screen and (max-width:1024px){
      width: 301.6px;
      height: 301.6px;
   }

   @media screen and (max-width:640px){
      height: 188.14px;
      width: 187.62px;
   }
`

export const ThirdTeamDiv = styled.div`
   width: 196px;
   height: 196px;
   position: absolute;
   top:50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 100%;
   z-index: 3;

   &::before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 100%;
      border: 1px dotted rgba(129, 129, 129, 1);
   }

   @media screen and (max-width:1024px){
      width: 151.57px;
      height: 151.57px;
   }

   @media screen and (max-width:640px){
      height: 94.55px;
      width: 94.29px;
   }
`

export const WorldDiv = styled.div`
   width: 79.23px;
   height: 79.23px;
   background: url(/images/Earth.gif);
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   position: absolute;
   top:50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 100%;
   z-index: 4;

   
   @media screen and (max-width:1024px){
      width: 61.27px;
      height: 57.13px;
   }

   @media screen and (max-width:640px){
      width: 45.27px;
      height: 42.18px;
   }

`

export const moveMemberOne = keyframes`
   0%{
      transform: rotate(20deg);
   }
`
export const moveMemberTwo = keyframes`
   0%{
      transform: rotate(-20deg);
   }
`
export const FirstMemberOne = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 5%;
      left: 15%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/ClementDark.svg' : '/images/team/ClementColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }

`

export const FirstMemberTwo = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   background: transparent;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 10%;
      left: 80%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/IosDark.svg' : '/images/team/IosColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const FirstMemberThree = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 50%;
      left: -4%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/SeyiDark.svg' : '/images/team/SeyiColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const FirstMemberFour = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 80%;
      left: 10%;
      border-radius: 50%;
      background-color: pin;
      background-image: url(${({img}) => img ? '/images/team/FatimaDark.svg' : '/images/team/FatimaColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const FirstMemberFive = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 91%;
      left: 65%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/DanielDark.svg' : '/images/team/DanielColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const FirstMemberSix = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 40%;
      left: 95%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/FatimaDark.svg' : '/images/team/FatimaColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const SecondMemberOne = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberTwo} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 60%;
      left: -5%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/AbelDark.svg' : '/images/team/AbelColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const SecondMemberTwo = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberTwo} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 90%;
      left: 60%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/EllaDark.svg' : '/images/team/EllaColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const SecondMemberThree = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberTwo} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 15%;
      left: 85%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/OluchiDark.svg' : '/images/team/OluchiColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const ThirdMemberOne = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 20%;
      left: -10%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/GloryDark.svg' : '/images/team/GloryColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const ThirdMemberTwo = styled.div`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation: ${moveMemberOne} 5s linear infinite alternate; 

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 60%;
      left: 80%;
      border-radius: 50%;
      background-image: url(${({img}) => img ? '/images/team/NecheDark.svg' : '/images/team/NecheColored.svg'});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @media screen and (max-width:1024px){
         width: 50.27px;
         height: 51.08px;
      }

      @media screen and (max-width:640px){
         height: 31.84px;
         width: 31.27px;
      }
   }
`

export const ImgContainer = styled(Image)`

`