import styled, {keyframes} from 'styled-components'
import Image from 'next/image'
const slider = keyframes`
  0% { left: 0%; }
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
position: relative;
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
opacity: 0.6;
padding: 50px 0;
width:100%;
margin: auto;
box-sizing: border-box;
@media (max-width: 1024px) {
    width:95%
  }
  @media (max-width: 550px) {
    position: absolute;
    margin-left: 20px;
    width:1400px;
    overflow: hidden;
  }
`
const SliderInnerContainer = styled.div`
display: flex;
flex-direction:row;
top: 20%;
width:100%;
position: absolute;
display: flex;
flex-direction:row;
@media (max-width: 570px) {
display: block;
top: 18%;
width: 150%;
position: absolute;
animation: ${slider} 17s linear infinite;
 transition: animation 0.5s ease-in-out
}`

const SlideImageContainer = styled.div`
  width:190px;
  display: inline-block;
  margin: 0 35px;
  @media (max-width: 1024px) {
    margin: 0 15px;
  }
  @media (max-width: 800px) {
    width: 150px;
  }
    @media (max-width: 550px) {
    margin: 0 40px;
  }
`
const SlideImageOne = styled.span`
@media (max-width: 550px) {
  float: left;
  width: 45%;
}
`
const Slider = () => {
  return ( 
<BackingSlider>
  <SliderText className='text-w text-center pb-6'>Backed by</SliderText>
  <SliderContainer className='text-w flex justify-center'>

    <SliderInnerContainer className='text-w flex justify-center'>
      <SlideImageOne>


      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-125 xl:h-92'>
        <Image src='/images/polygonstudios.png'  width={175} height={92} alt="Polygon Studios" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/polygon.png'  width={240} height={92} alt="Polygon" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/crevatal.png'  width={254} height={92} alt="Crevatal" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-126 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/designers-dao.png'  width={265} height={92} alt="Designers DAO" objectFit='contain'></Image>
      </SlideImageContainer>

    </SlideImageOne>

    
    <SlideImageOne className='sm:hidden'>


      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-125 xl:h-92'>
        <Image src='/images/polygonstudios.png'  width={175} height={92} alt="Polygon Studios" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/polygon.png'  width={240} height={92} alt="Polygon" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/crevatal.png'  width={254} height={92} alt="Crevatal" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-126 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/designers-dao.png'  width={265} height={92} alt="Designers DAO" objectFit='contain'></Image>
      </SlideImageContainer>
      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-125 xl:h-92'>
        <Image src='/images/polygonstudios.png'  width={175} height={92} alt="Polygon Studios" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/polygon.png'  width={240} height={92} alt="Polygon" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-226 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/crevatal.png'  width={254} height={92} alt="Crevatal" objectFit='contain'></Image>
      </SlideImageContainer>

      <SlideImageContainer className='w-126 h-42 lg:w-186 lg:h-62 xl:w-254 xl:h-92'>
        <Image src='/images/designers-dao.png'  width={265} height={92} alt="Designers DAO" objectFit='contain'></Image>
      </SlideImageContainer>

    </SlideImageOne>

    </SliderInnerContainer>
  </SliderContainer>

  
</BackingSlider>
  )
}

export default Slider

