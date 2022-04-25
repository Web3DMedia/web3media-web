import styled from 'styled-components'


interface IProps {
   headerTxt: string
}

const TxtDiv = styled.div`
   position: relative;

   span{
      background: linear-gradient(135deg, #FF6EFF 0%, #0AB7F6 100%);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-stroke: 4px transparent;
   }

   span:last-child{
      position: absolute;
      left: 4px;
   }

`
const SectionText = ({headerTxt}: IProps) => {
   return (
      <TxtDiv >
         <span className="text-white text-[36px] font-extrabold lg:text-[56px] xl:text-[70px]">{headerTxt}</span>
         <span className="text-white text-[36px] font-extrabold lg:text-[56px] xl:text-[70px]">{headerTxt}</span>
      </TxtDiv>
   )
}

export default SectionText