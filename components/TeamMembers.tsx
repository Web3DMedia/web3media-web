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
            <FirstMemberOne filterState={myState}/>
            <FirstMemberTwo filterState={myState}/>
            <FirstMemberThree filterState={myState}/>
            <FirstMemberFour filterState={myState}/>
            <FirstMemberFive filterState={myState}/>
            <FirstMemberSix filterState={myState}/>
         </FirstTeamDiv>
         <SecondTeamDiv>
            <SecondMemberOne filterState={myState}/>
            <SecondMemberTwo filterState={myState}/>
            <SecondMemberThree filterState={myState}/>
         </SecondTeamDiv>
         <ThirdTeamDiv>
            <ThirdMemberOne filterState={myState}/>
            <ThirdMemberTwo filterState={myState}/>
         </ThirdTeamDiv>
         <WorldDiv></WorldDiv>
      </TeamWrapper>
   )
}


export default TeamMembers