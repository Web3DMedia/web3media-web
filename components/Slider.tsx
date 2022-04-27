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
width:30%;
margin: auto;
box-sizing: border-box;
position: relative;
@media (max-width: 1024px) {
    width:40%;
  }
    @media (max-width: 550px) {
    width:70%;
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

      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="polygon studios" objectFit='contain' className='w-40 h-40 lg:w-48 lg:h-48 2xl:w-64 xl:h-64'></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="crevatal" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/backed-by-3.png'  width={64} height={64} alt="Designers DAO" objectFit='contain'></Image>
      </SlideImageContainer>
      
  </SliderContainer>
</BackingSlider>
  )
}

export default Slider