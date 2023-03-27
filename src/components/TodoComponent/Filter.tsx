import styled from 'styled-components'
import type { IFilter, IStyledFilter } from '../../type/types'

const Filter = ({filterState, handleFilter} : IFilter) => {
  return(
    <FilterWrapper>
    <FilterDiv className='all' state={'all'} current={filterState} onClick={() => handleFilter('all')}>All</FilterDiv>
    <FilterDiv className='doneFIlter' state={'done'} current={filterState} onClick={() => handleFilter('done')}>Done!</FilterDiv>
    <FilterDiv className='notYetFilter' state={'notYet'} current={filterState} onClick={() => handleFilter('notYet')}>Not yet</FilterDiv>
  </FilterWrapper>
  )
}

const FilterWrapper = styled.div`
  display: flex;
  justify-content:end;
  margin: 2.5% 0;
  font-weight: bold;
  font-size: 150%;
  transition : all ease 0.3s 0.3s;
`
const FilterDiv = styled.div<IStyledFilter>`
    cursor: pointer;
    padding:1rem;
    background-color : ${(props) => 
    props.theme.theme==='light' ?     props.state === props.current ? 'var(--color-mauve)' : 'var(--color-blue )'
    :
    props.state === props.current ? 'var(--color-mauve)' : 'var(--color-navy )'
  };
    color: ${(props) => props.theme.theme==='light' ? props.state === props.current ? 'var(--color-black)' : 'var(--color-white)' : props.state === props.current ? 'var(--color-black)' : 'var(--color-darkModeColor)'
  };
    border-radius: 1rem;
    margin-right: 1%;
    :hover{
        scale:1.1;
      }
`


export default Filter