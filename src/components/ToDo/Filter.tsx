import styled from 'styled-components'

interface IFilter {
  filterState : string;
  handleFilter(state : string) : void
}
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
interface IFilterProps {
  state : string;
  current : string
}
const FilterDiv = styled.div<IFilterProps>`
    cursor: pointer;
    padding:1rem;
    background-color : ${(props) => props.state === props.current ? 'var(--color-mauve)' : 'var(--color-blue )'};
    color: ${(props) => props.state === props.current ? 'var(--color-black)' : 'var(--color-white)'};
    border-radius: 1rem;
    margin-right: 1%;
    :hover{
        scale:1.1;
      }
`


export default Filter