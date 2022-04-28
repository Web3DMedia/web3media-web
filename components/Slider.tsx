import styled from 'styled-components'
import Image from 'next/image'

const BackingSlider = styled.div`
background: url(/images/background.png);
background-size: 500px;
padding-bottom:105px;
background-position: center;
background-repeat: none;
box-sizing: border-box;
overflow: hidden;
`
const SliderText = styled.h2`
font-weight: 400;
font-size: 18px;
line-height: 40px;
text-align: center;
letter-spacing: 0.01em;
color: var(--W)
`
const SliderContainer = styled.div`
padding: 20px 0;
width:100%;
margin: auto;
box-sizing: border-box;
position: relative;
@media (max-width: 1024px) {
    width:70%;
  }
    @media (max-width: 550px) {
    width:100%;
  }
`
const SlideImageContainer = styled.div`
display: inline-block;
margin: 0 35px;
@media (max-width: 1024px) {
    margin: 0 31px;
  }
    @media (max-width: 550px) {
    margin: 0 25px;
  }
`
const Slider = () => {
  return (
<BackingSlider>
  <SliderText className='text-w text-center pb-6'>Backed by</SliderText>
  <SliderContainer className='text-w flex justify-center'>

      <SlideImageContainer className='w-126 h-42 lg:w-186 lg:h-62 xl:w-276 xl:h-92'>
        <Image src='/images/designers-dao.png'  width={276} height={92} alt="polygon studios" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/crevatal.png'  width={254} height={92} alt="crevatal" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-126 h-42 lg:w-186 lg:h-62 xl:w-125 xl:h-92'>
        <Image src='/images/polygonstudios.png'  width={125} height={92} alt="Designers DAO" objectFit='contain'></Image>
      </SlideImageContainer>
      
  </SliderContainer>
</BackingSlider>
  )
}

export default Slider