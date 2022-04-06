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
top: 30%;
width: 200%;
position: absolute;
animation: ${slider} 7s linear infinite;
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
  <SliderContainer className='text-w flex'>
    <SliderInnerContainer>
      <SlideImageOne>

      <SlideImageContainer>
        <Image src='/images/gumi.png'  width={109} height={64} alt="gumi"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/coinfund.png'  width={109} height={64} alt="coinfund"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/atcapital.png'  width={109} height={64} alt="atcapital"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/bull.png'  width={109} height={64} alt="bull"></Image>  
      </SlideImageContainer> 

      <SlideImageContainer>
        <Image src='/images/gumi.png'  width={109} height={64} alt="gumi"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/coinfund.png'  width={109} height={64} alt="coinfund"></Image>
      </SlideImageContainer> 

      <SlideImageContainer>
        <Image src='/images/atcapital.png'  width={109} height={64} alt="atcapital"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/bull.png'  width={109} height={64} alt="bull"></Image>  
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/gumi.png'  width={109} height={64} alt="gumi"></Image>
      </SlideImageContainer>

    </SlideImageOne>

    
    <SlideImageOne>

      <SlideImageContainer>
        <Image src='/images/gumi.png'  width={109} height={64} alt="gumi"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/coinfund.png'  width={109} height={64} alt="coinfund"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/atcapital.png'  width={109} height={64} alt="atcapital"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/bull.png'  width={109} height={64} alt="bull"></Image>  
      </SlideImageContainer> 

      <SlideImageContainer>
        <Image src='/images/gumi.png'  width={109} height={64} alt="gumi"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/coinfund.png'  width={109} height={64} alt="coinfund"></Image>
      </SlideImageContainer>   

      <SlideImageContainer>
        <Image src='/images/atcapital.png'  width={109} height={64} alt="atcapital"></Image>
      </SlideImageContainer>

      <SlideImageContainer>
        <Image src='/images/bull.png'  width={109} height={64} alt="bull"></Image>  
      </SlideImageContainer>

      
      <SlideImageContainer>
        <Image src='/images/gumi.png'  width={109} height={64} alt="gumi"></Image>
      </SlideImageContainer>

    </SlideImageOne>

    </SliderInnerContainer>
  </SliderContainer>
</BackingSlider>
  )
}

export default Slider