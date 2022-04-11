import {useState, useEffect} from 'react'
import Image from 'next/image'
import {
   TeamWrapper,
   FirstTeamDiv,
   SecondTeamDiv,
   ThirdTeamDiv,
   WorldDiv,
   FirstMemberOne,
   FirstMemberTwo,
   FirstMemberThree,
   FirstMemberFour,
   FirstMemberFive,
   FirstMemberSix,
   SecondMemberOne,
   SecondMemberTwo,
   SecondMemberThree,
   ThirdMemberOne,
   ThirdMemberTwo,
} from '../styles/TeameMemberStyles'



const TeamMembers = () => {
   const [myState, setMyState] = useState(false)
   setTimeout(() => {setMyState(!myState)}, 2000);

   return (
      <TeamWrapper>
         <FirstTeamDiv>
            <FirstMemberOne img={myState}/>
            <FirstMemberTwo img={myState}/>
            <FirstMemberThree img={myState}/>
            <FirstMemberFour img={myState}/>
            <FirstMemberFive img={myState}/>
            <FirstMemberSix img={myState}/>
         </FirstTeamDiv>
         <SecondTeamDiv>
            <SecondMemberOne img={myState}/>
            <SecondMemberTwo img={myState}/>
            <SecondMemberThree img={myState}/>
         </SecondTeamDiv>
         <ThirdTeamDiv>
            <ThirdMemberOne img={myState}/>
            <ThirdMemberTwo img={myState}/>
         </ThirdTeamDiv>
         <WorldDiv></WorldDiv>
      </TeamWrapper>
   )
}


export default TeamMembers