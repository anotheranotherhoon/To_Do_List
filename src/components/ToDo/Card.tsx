import React, {useState} from 'react'
import styled from "styled-components";
import Check from '../../assets/svg/Check';
import Circle from '../../assets/svg/Circle'
import ModalAlert from '../ModalAlert';
import Modal from '../Modal'
import { updateTodo,deleteTodo } from '../../api/todo';
import {useQueryClient, useMutation} from '@tanstack/react-query';
import type { ITodo, ILayout } from '../../type/types';


const Card = ({ id, todo, isCompleted, userId } : ITodo) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState<number>(0)
  const [editModalMessage, setEditModalMessage] = useState<string>('')
  const [toDoContent, setToDoContent] = useState<string>(todo)
  const [toDoIsCompleted, setToDoIsCompleted] = useState<boolean>(isCompleted)
  const queryClient = useQueryClient()


  const editToDo = (e : React.ChangeEvent<HTMLInputElement>) => {
    setToDoContent(e.target.value)
  }
  const handleUpdateTodo = async() => {
    await updateTodo(id, toDoContent, toDoIsCompleted, userId)
    setIsEditMode(false)
    modalClose()
  }
  const handleDeleteTodo = async(id : number) => {
    await deleteTodo(id)
    modalClose()
  }
  const {mutate:mutateDelete} = useMutation(handleDeleteTodo,{
    onSuccess : () => queryClient.invalidateQueries(['todos'])
  })
  const {mutate : mutateEdit} = useMutation(handleUpdateTodo,{
    onSuccess : () => queryClient.invalidateQueries(['todos'])
  })
  const handleComplete = () => {
    setToDoIsCompleted(!toDoIsCompleted)
  }

  const handleEditBtn = () => {
    setIsEditMode(true)
    setIsModalOpen(true)
  }
  const modalClose = () => {
    setIsEditModalOpen(0)
    setIsModalOpen(false)
  }
  const handleEditModalOpen = (option:number, message:string) => {
    setEditModalMessage(message)
    setIsEditModalOpen(option)
  }
  const handleCancelEditMode = () => {
    setIsEditMode(false)
    setIsModalOpen(false)
    setToDoContent(todo)
    setToDoIsCompleted(isCompleted)
  }
  return (
    <Layout isCompleted={toDoIsCompleted} isEditMode={isEditMode}>
      <Mark>{toDoIsCompleted ? <Check /> : <Circle />}</Mark>
      <div className="content">{toDoContent}</div>
      <EventWrapper>
        {isEditMode ? (
          <>
            <Edit className="leftOne"  onClick={() => handleEditModalOpen(1, '제출하시겠습니까?')}>
              제출
            </Edit>
            <Edit onClick={handleCancelEditMode}>
              취소
            </Edit>
          </>
        ) : (
          <>
            <Edit className="leftOne" onClick={handleEditBtn}>
              수정
            </Edit>
            <Edit onClick={() => handleEditModalOpen(2,'정말 삭제하시겠습니까?')}>
              삭제
            </Edit>
          </>
        )}
        {isModalOpen && (
          <Modal
            modalClose={modalClose}
            todo={toDoContent}
            editToDo={editToDo}
            handleCancelEditMode={handleCancelEditMode}
            isCompleted={toDoIsCompleted}
            handleComplete={handleComplete}
          />
        )}
        {isEditModalOpen === 1 ? <ModalAlert leftBtnClick={mutateEdit} leftBtnMessage='네'  rightBtnClick={modalClose} rightBtnMessage='아니오'>{editModalMessage}</ModalAlert> :<></>}
        {isEditModalOpen === 2? <ModalAlert  leftBtnClick={()=>mutateDelete(id)}  leftBtnMessage='네' rightBtnClick={modalClose} rightBtnMessage='아니오'>{editModalMessage}</ModalAlert> :<></>}
      </EventWrapper>
    </Layout>
  )
}



const Layout = styled.div<ILayout>`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: normal;
  width: 100%;
  margin: 2% 0;
  padding: 2%;
  background-color: ${(props : ILayout)  =>
  props.theme.theme === 'light' ? (
    props.isCompleted
      ? props.isEditMode
        ? 'var(--color-yellow)'
        : 'var(--color-mauve)'
      : props.isEditMode
        ? 'var(--color-yellow)'
        : 'var(--color-white)'
  ) : (
    props.isCompleted
      ? props.isEditMode
        ? 'var(--color-yellow)'
        : 'var(--color-black)'
      : props.isEditMode
        ? 'var(--color-olive)'
        : 'var(--color-navy)'
  )
        };

  border-radius: 2rem;
  transition: all ease 0.5s 0.5s;
  border: ${(props : ILayout) => props.theme.theme==='light' ?(props.isEditMode ? '3px solid var(--color-orange)' : 'none') : (props.isEditMode ? '3px solid var(--color-green)' : 'none')};
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 400%;
    padding-left: 4%;
    white-space: nowrap;
  }
  @media screen and (max-width: 413px) {
    max-width: 38rem;
    font-size: 50%;
  }
`

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  font-size: 250%;
  white-space: nowrap;
`
const Edit = styled.div`
  min-width: 4.4rem;
  cursor: pointer;
  &.leftOne {
    margin-right: 10%;
  }
`
const Mark = styled.div`
  min-height: 5rem;
  min-width: 5rem;
`


export default Card