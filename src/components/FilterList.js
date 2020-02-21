import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//data
import { evos, boss, sUnit, mats, displayUpperCase } from '../data'

const StyledFilterList = styled.div`
  .Title {
    margin-left: 10px;
    font-weight: 500;
    color: #ACACAC;
  }
  .Block {
    display: block;
    padding: 3px;
    list-style-type: none;
  }  
  .Info {
    margin: 5px 10px 5px 5px;
    color: #7D7D7D;
    text-transform: capitalize;
  }
`;

function FilterList({ onFiltersChange }) {
  const [evoFilter, setEvoFilter] = useState([]);
  const [bossFilter, setBossFilter] = useState([]);
  const [sUnitFilter, setSUnitFilter] = useState([]);
  const [matFilter, setMatFilter] = useState([]);

  useEffect(() => {
    onFiltersChange({ evos: evoFilter, boss: bossFilter, sUnit: sUnitFilter, mats: matFilter })
  }, [evoFilter, bossFilter, sUnitFilter, matFilter])

  const handleOnEvoChange = e => {
    const nextEvoFilter = e.target.value;

    setEvoFilter(state => {
      const currentFilterLoc = state.indexOf(nextEvoFilter);
      if (currentFilterLoc === -1) {
        return [...evoFilter, nextEvoFilter];
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ];
      }
    });
  };

  const handleOnBossChange = e => {
    const nextBossFilter = e.target.value;

    setBossFilter(state => {
      const currentFilterLoc = state.indexOf(nextBossFilter);
      if (currentFilterLoc === -1) {
        return [...bossFilter, nextBossFilter];
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ];
      }
    });
  };

  const handleOnSUnitChange = e => {
    const nextSUnitFilter = e.target.value;

    setSUnitFilter(state => {
      const currentFilterLoc = state.indexOf(nextSUnitFilter);
      if (currentFilterLoc === -1) {
        return [...sUnitFilter, nextSUnitFilter];
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ];
      }
    });
  };

  const handleOnMatChange = e => {
    const nextMatFilter = e.target.value;

    setMatFilter(state => {
      const currentFilterLoc = state.indexOf(nextMatFilter);
      if (currentFilterLoc === -1) {
        return [...matFilter, nextMatFilter];
      } else {
        return [
          ...state.slice(0, currentFilterLoc),
          ...state.slice(currentFilterLoc + 1, state.length),
        ];
      }
    });
  };

  return (
    <StyledFilterList>
      <div className='Title'>Evos:</div>
      <ul>
        { 
          evos.map(evo => (
              <li className='Block' key={evo}>
                <input 
                  type='checkbox'
                  value={evo}
                  checked={evoFilter.includes(evo)}
                  onChange={handleOnEvoChange}
                />
                <label className='Info'>{evo}</label>
              </li>
            )
          ) 
        }
      </ul>
      <div className='Title'>Boss:</div>
      <ul>
        { 
          boss.map(boss => (
            <li className='Block' key={boss}>
              <input 
                type='checkbox'
                value={boss}
                checked={bossFilter.includes(boss)}
                onChange={handleOnBossChange}
              />
              <label className='Info'>{boss}</label>
            </li>
            )
          ) 
        }
      </ul>
      <div className='Title'>S Unit:</div>
      <ul>
        { 
          sUnit.map(sUnit => (
            <li className='Block' key={sUnit}>
              <input 
                type='checkbox'
                value={sUnit}
                checked={sUnitFilter.includes(sUnit)}
                onChange={handleOnSUnitChange}
              />
              <label className='Info'>{sUnit}</label>
            </li>
            )
          ) 
        }
      </ul>
      <div className='Title'>Material:</div>
      <ul>
        { 
          mats.map(material => (
            <li className='Block' key={material}>
              <input 
                type='checkbox' 
                value={material}
                checked={matFilter.includes(material)}
                onChange={handleOnMatChange}
              />
              <label className='Info'>{displayUpperCase(material)}</label>
            </li>
            )
          )
        }
      </ul>
    </StyledFilterList>
  )
}

export default FilterList