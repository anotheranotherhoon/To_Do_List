import styled from 'styled-components'
import type { IHeader } from '../../type/types'

const Header = ({handleModalOpen} : IHeader) => {
  return(
    <Wrapper>
    <h1>To Do List</h1>
    <LogOut>
      <span className='btnName' onClick={() => handleModalOpen(1, '로그아웃 하시겠습니까?')}>로그아웃</span>
    </LogOut>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 500%;
  padding-top: 1rem;
  text-align: center;
  margin: 4% 0;
`


const LogOut = styled.div`
  text-align: end;
  .btnName {
    cursor: pointer;
    font-size: 25%;
    background-color: ${(props)=>props.theme.theme==='light' ? 'var(--color-blue) ': 'var(--color-navy)'};
    border-radius: 1rem;
    margin-left: auto;
    padding:1rem ;
    margin-left: 1%;
    color: ${(props)=>props.theme.theme==='light' ? 'var(--color-white) ': 'var(--color-darkModeColor)'};
  }
`

export default Header