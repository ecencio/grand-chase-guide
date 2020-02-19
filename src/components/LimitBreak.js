import React from 'react'
import styled from 'styled-components'

const StyledLimitBreak = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  box-shadow: inset 0 0 3px 1px #454545;
  .SkillWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }
  .LBTitleWrapper {
    text-align: center;
    margin: 10px 10px 10px 100px;
  }
  .LBTitle {
    font-size: 20px;
    font-weight: 500;
    color: #ACACAC;
  }
  .LBSkill {
    height: 80px;
    width: auto;
    border: 1px solid black;
  }
  .LBName {
    display: block;
    text-align: center;
    font-weight: 500;
    color: #ACACAC;
  }
  .Arrow {
    margin: 0 10px 25px 10px;
    font-weight: 500;
    font-size: 30px;
    color: #ACACAC;
  }
`;

function LimitBreak({ build }) {
  return (
    <StyledLimitBreak>
      <div className='LBTitleWrapper'>
        <div className='LBTitle'>Limit</div>
        <div className='LBTitle'>Break</div>
      </div>
      <div className='SkillWrapper'>
        <div>
          <img className='LBSkill' src={build.limitBreak1} />
          <span className='LBName'>{build.lb1}</span>
        </div>
        <span className='Arrow'>&rarr;</span>
        <div>
        <img className='LBSkill' src={build.limitBreak2} />
        <span className='LBName'>{build.lb2}</span>
        </div>
      </div>
    </StyledLimitBreak>
  )
}

export default LimitBreak;