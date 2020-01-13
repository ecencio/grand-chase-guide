import React from 'react'
import styled from 'styled-components'

const StyledFilter = styled.div`
  .Info {
    margin: 5px;
    color: #7D7D7D;
  }
  .Block {
    display: block;
    padding: 3px;
  }
`;

function Filter({ type }) {
  return (
    <StyledFilter>
      <div className='Filters'>
        <div className='FilterData'>
          <div className='Block'>
            <input type='checkbox' />
            <label className='Info'>{type.type}</label>
          </div>
        </div>
      </div>
    </StyledFilter>
  )
}

export default Filter