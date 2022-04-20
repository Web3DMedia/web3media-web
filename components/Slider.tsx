import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

const slider = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`
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
border-top: 0.5px solid var(--B2);
border-bottom: 0.5px solid var(--B2);
padding:50px 0;
width:1308px;
margin: 0 auto 40px;
overflow: hidden;
box-sizing: border-box;
position: relative;
`
const SliderInnerContainer = styled.div`
display: block;
top: 18%;
width: 200%;
position: absolute;
animation: ${slider} 17s linear infinite;
&:hover {
   animation-play-state: paused;
}
`
const SlideImageContainer = styled.div`
padding: 0 20px;
width: 109px;
height: 64px;
border-radius: 50px;
display: inline-block;
margin: 0 24.7px;
float: left;
transition: all .2s ease-out;
&:hover {
  transform: scale(1.2);
  opacity: .5;
  cursor: pointer;
`
const SlideImageOne = styled.span`
float: left;
width: 50%;
`
const Slider = () => {
  return (
<BackingSlider>
  <SliderText className='text-w text-center pb-6'>Backed by</SliderText>
  <SliderContainer className='text-w flex'>
    <SliderInnerContainer>
      <SlideImageOne>

      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      
    </SlideImageOne>

    
    <SlideImageOne>

      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-1.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer>
        <Image src='/images/backed-by-2.png'  width={64} height={64} alt="gumi" objectFit='contain'></Image>
      </SlideImageContainer>

    </SlideImageOne>

    </SliderInnerContainer>
  </SliderContainer>
</BackingSlider>
  )
}

export default Slider