import React from 'react'
import styled from 'styled-components'

//assets
import diamond from '../assets/diamond/diamond.png'

const StyledName = styled.div`
  width: 100px;
  font-size: 14px;
  border-radius: 10px;
  margin: 7px 0 7px 7px;
  padding: 5px;
  span {
    margin: 10px;
    color: #FFF;
    text-transform: uppercase;
  }
  img {
    height: 10px;
    width: 10px;
  }
`;

const StyledProfile = styled.div`{
  .Profile {
    height: auto;
    width: 40px;
    margin: 7px 7px 7px 0;
  }
}`

function Name({ name, profilePic }) {
  const backColor = {
    background: `linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(0,0,0,0) 100%)`,
    padding: `15px`
  }
  return (
    <div style={{display: 'flex', alignItems: 'center', borderRight: '1px solid black'}}>
      <StyledName style={backColor}>
        <img src={diamond} alt='diamond' />
        <span>{name}</span>
      </StyledName>
      <StyledProfile>
        <img className='Profile' src={profilePic} alt='profile' />
      </StyledProfile>
    </div>  
  )
}

export default Name
