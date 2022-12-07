import React, {useRef} from 'react'
import styled from 'styled-components'
import type { IModalAlert } from '../type/types'

const ModalAlert = ({children, leftBtnMessage, rightBtnMessage,leftBtnClick, rightBtnClick} : IModalAlert) => {
  const modalRef = useRef(null)
  const cllickBackground = (e : React.MouseEvent) => {
    if (modalRef.current === e.target) {
      rightBtnClick?.()
    }
  }

  return (
    <Container>
      <Background ref={modalRef} onClick={cllickBackground} />
      <ModalBlock>
        <span>{children}</span>
        <Btn className='yes' onClick={()=>leftBtnClick?.()}>{leftBtnMessage}</Btn>
        <Btn  className='cancel' onClick={()=>rightBtnClick?.()}>{rightBtnMessage}</Btn>
      </ModalBlock>
    </Container>
  )
}
const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin: auto;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ModalBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: ${(props)=>props.theme.theme ==='light' ? 'var(--color-blue)' : 'var(--color-black)'};
  color: var(--color-white);
  width: 30rem;
  min-height: 9rem;
  animation: modal-show 0.3s;
  @media screen and (max-width: 413px) {
    top:40rem;
  }
  span{
    margin-bottom: 8%;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`

const Btn = styled.div`
  position: absolute;
  bottom: 1rem;
  padding: 1rem;
  color:${(props)=>props.theme.theme==='light'  ?'var(--color-white)':  'var(--color-gray)'};
  transition: all ease 0.2s 0.2s;
  cursor: pointer;
  &.yes{
  right: 9rem;
  background-color:${(props)=>props.theme.theme==='light' ? 'var(--color-blue)' : 'var(--color-black)'};
  border-radius: 2rem;
  }
  &.cancel{
  right: 1rem;
  background-color:${(props)=>props.theme.theme==='light' ? 'var(--color-blue)' : 'var(--color-black)'};
  border-radius: 2rem;
  }

`

export default ModalAlert