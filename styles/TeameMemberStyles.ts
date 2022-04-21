import styled, {keyframes} from 'styled-components'

export const TeamSectionDiv = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   margin-bottom: 40px;
`

export const TeamUnderlayMesh = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-image: url(/images/team-mesh.png), url(/images/underlay-mesh.png);
   background-repeat: no-repeat, no-repeat;
   background-position: top right, center top;
   background-size: auto, auto;
`

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
   background: url(/images/earth.gif);
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
      transform: rotateZ(0deg);
   }
   25%{
      transform: rotateZ(30deg);
   }
   50%{
      transform: rotateZ(0deg)
   }
   75%{
      transform: rotateZ(-30deg);
   }
   100%{
      transform: rotateZ(0deg);
   }
`
export const moveMemberTwo = keyframes`
   0%{ 
      transform: rotateZ(0deg);
   }
   25%{
      transform: rotateZ(-30deg);
   }
   50%{
      transform: rotateZ(0deg)
   }
   75%{
      transform: rotateZ(30deg);
   }
   100%{
      transform: rotateZ(0deg);
   }
`

export const FirstMemberOne = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: both;
   animation-delay: 1s;

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 10%;
      left: 10%;
      border-radius: 50%;
      background-image: url(/images/team/clement.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const FirstMemberTwo = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   background: transparent;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;


   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 65%;
      left: -1%;
      border-radius: 50%;
      background-image: url(/images/team/okwu.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const FirstMemberThree = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 89%;
      left: 25%;
      border-radius: 50%;
      background-image: url(/images/team/seyi.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const FirstMemberFour = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;


   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 90%;
      left: 62%;
      border-radius: 50%;
      background-color: pin;
      background-image: url(/images/team/fatima.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const FirstMemberFive = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 55%;
      left: 92%;
      border-radius: 50%;
      background-image: url(/images/team/daniel.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const FirstMemberSix = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;


   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 20%;
      left: 87%;
      border-radius: 50%;
      background-image: url(/images/team/fatima.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const SecondMemberOne = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberTwo};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 45%;
      left: -8%;
      border-radius: 50%;
      background-image: url(/images/team/abel.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const SecondMemberTwo = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberTwo};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 85%;
      left: 60%;
      border-radius: 50%;
      background-image: url(/images/team/ella.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const SecondMemberThree = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberTwo};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 8%;
      left: 78%;
      border-radius: 50%;
      background-image: url(/images/team/oluchi.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const ThirdMemberOne = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;


   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 16%;
      left: -7%;
      border-radius: 50%;
      background-image: url(/images/team/glory.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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

export const ThirdMemberTwo = styled.div<{filterState:boolean}>`
   width:100%;
   height: 100%;
   border-radius: 100%;
   position: absolute;
   animation-name: ${moveMemberOne};
   animation-duration: 10s;
   animation-iteration-count: infinite;
   animation-fill-mode: linear;
   animation-delay: 1s;

   &::before{
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      top: 62%;
      left: 77%;
      border-radius: 50%;
      background-image: url(/images/team/neche.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"}; /* Safari 6.0 - 9.0 */
      filter: ${({filterState}) => filterState ? "grayscale(100%)":"grayscale(0)"};
      transition: ease-in-out 2s filter ;

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
