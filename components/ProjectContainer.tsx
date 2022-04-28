import styled from 'styled-components'

const ContainerWrapper = styled.div`
   background: url(/images/background.png);
   background-size: 500px;
   background-position: center;
   background-repeat: none;
   margin:0px auto; ;
   @media (max-width: 1024px) {
      border: none;
      background-size: 500px;
   }
   @media (max-width: 550px) {
      border: none;
      background-size: 300px;
   }
`

const ProjectContainer = ({children}) => {
   return (
      <ContainerWrapper>
         <div className='relative w-full md:px-6 max-w-[900px] mx-auto lg:px-7 xl:max-w-[1240px] 2xl:max-w-[1440px] 3xl:max-w-[1920px] 4xl:max-w-[2000px]'>
            {children}
         </div>
      </ContainerWrapper>
   )
}

export default ProjectContainer