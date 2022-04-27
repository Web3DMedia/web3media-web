import styled, { keyframes }from 'styled-components'

export const ProjectWrapper = styled.div`
   height: 100%;
   padding: 20px 0px;
   position: relative;

   @media screen and (max-width: 1920px){
      height: 100%;
   }
   
   @media screen and (max-width: 642px){
      height: 100%;
   }
`
export const ProjectsUnderLay = styled.div`
   position: absolute;
   top: 20%;
   right: 0;
   width: 800px;
   height: 300px;
   background-image: url(/images/projects-mesh.png);
   background-repeat: no-repeat;
   background-position: top right;
   background-size: auto;

   @media screen and (max-width: 768px){
      top: 10%;
      width: 500px;
   }


   @media screen and (max-width: 640px){
      background-size: 300px;
      
   }
   @media screen and (max-width: 468px){
      background-position: center, right top;
      background-size: 200px;
   }
`

export const Card = styled.div`
   cursor: pointer;
   color: #FFFFFF;
   position: relative;
   margin: 0px 50px;
   width: 720px;
   &:first-child{
      margin-left: 0px;
   }

   @media screen and (max-width: 768px){
      &:first-child{
         margin: 0px auto;
      } 
   }

   @media screen and (max-width: 640px){
      width: 500px;
      margin: 50px auto;
   }

   @media screen and (max-width: 568px){
      width: 350px;
      margin: 20px auto;
   }
`


export const ImageContainer = styled.div`
   border-radius: 8px;
   overflow: hidden;
   margin: 0px 0px;
   width: 720px;
   height: 423px;
   position: relative;

   @media screen and (max-width: 1024px){
      width: 628px;
   }

   @media screen and (max-width: 640px){
      width: 500px;
   }

   @media screen and (max-width: 568px){
      width: 335px;
      height: 368px;
      margin: 0px 0px;
   }
`


export const CardBottom = styled.div`
   width: 100%;
   position: relative;
`

export const CardBottomTop = styled.div<{onHover: boolean}>`
   display: flex;
   flex-direction: row;
   margin: 10px auto 0;
   z-index: 3;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   position: relative;
   opacity: ${props => props.onHover ? 0 : 1};
   transition: opacity 0.5s ease-in-out;

   @media screen and (max-width: 640px){
      flex-direction: column;
      align-items:flex-start;
   }

   @media screen and (max-width: 380px){
      padding-left: 20px;
   }
`

export const CardBottomDiv = styled.div<{onHover: boolean}>`
   height:100px;
   width: 100%;
   background-color: transparent;
   position: absolute;
   z-index: 3;
   border: none;
   top: ${(props) => props.onHover ? "0%":"-240%"};
   left: 0;
   transition: .5s ease-in-out top;
   transition-delay: .15s;
`

export const BottomContent = styled.div`
   display: flex;
   flex-direction: row;
   margin: 10px auto 0;
   z-index: 3;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   position: relative;

   @media screen and (max-width: 640px){
      flex-direction: column;
      align-items:flex-start;
   }

   @media screen and (max-width: 380px){
      padding-left: 20px;
   }
`


export const MeshWrapper = styled.div`
   width: 100%;
   height: 100%;
   background: url(/images/underlay-mesh.png);
   background-size:  contain;
   background-position: left center bottom;
   background-repeat: no-repeat;

   @media screen and (max-width: 640px){
      background-size: 300px;
   }
   @media screen and (max-width: 468px){
      background-position: center right top;
      
   }
`