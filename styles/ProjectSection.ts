import styled from 'styled-components'

export const ProjectWrapper = styled.div`
   height: 100vh;
   padding: 20px 0px;
   background-image:url('/images/background.png');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   
   @media screen and (max-width: 642px){
      height: 100%;
   }
`

export const ProjectCard = styled.div`
   cursor: pointer;
   color: #FFFFFF;
   position: relative;
   margin: 0px 30px;
   width: 720px;

   @media screen and (max-width: 1024px){
      width: 628px;
      margin: 0px 20px;

   }

   @media screen and (max-width: 640px){
      width: 500px;
      margin: 50px 0px;
   }

   @media screen and (max-width: 568px){
      width: 335px;
      margin: 20px 5px;
   }

`

export const ImageContainer = styled.div`
   border-radius: 8px;
   overflow: hidden;
   margin: 0px 0px;
   width: 720px;
   height: 423px;
   position: relative;
   z-index: 3;

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

export const CardCenter = styled.div`
   display: flex;
   flex-direction: row;
   margin: 10px auto 0;
   z-index: 3;
   align-items: center;
   justify-content: space-between;
   width: 100%;

   @media screen and (max-width: 640px){
      flex-direction: column;
      align-items:flex-start;
   }
`

export const CardBottom = styled.div`
   margin-top: 10px;
   position: absolute;
   top: ${({onHover}) => onHover ? "100%":"10%"};
   left: 0;
   z-index: 2;
   padding: 0px 10px 0px 0px;
   transition: top 0.3s ease-in-out;

   @media screen and (max-width: 1024px){
      top: 100%;
      position: relative;
      margin-top: 20px;
      padding: 0px;
   }
`
