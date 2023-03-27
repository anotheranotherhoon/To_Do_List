import React from 'react'
import styled from "styled-components";
import Check from '../../assets/svg/Check';
import Circle from '../../assets/svg/Circle'
import ModalAlert from '../ModalAlert';
import Modal from '../Modal'
import { updateTodo,deleteTodo } from '../../api/todo';
import {useQueryClient, useMutation} from '@tanstack/react-query';
import type { ITodo, ILayout } from '../../type/types';
import { useModal } from '../../hook/useModal';
import { useEditMode } from '../../hook/useEditMode';

const Card = ({ id, todo, isCompleted, userId } : ITodo) => {
  const {isModalOpen,modalMessage,  handleModalOpen, handleModalClose} = useModal()
  const {isEditMode, isEditModalOpen,todoContent,toDoIsCompleted,editTodo,setIsEditMode, handleEditBtn,handleCancelEditMode, handleComplete, handleCloseEditModal} = useEditMode({todo, isCompleted})
  const queryClient = useQueryClient()
  const handleUpdateTodo = async() => {
    await updateTodo(id, todoContent, toDoIsCompleted, userId)
    setIsEditMode(false)
    handleModalClose()
  }
  const handleDeleteTodo = async(id : number) => {
    await deleteTodo(id)
  }

  const {mutate:mutateDelete} = useMutation(handleDeleteTodo,{
    onSuccess : () => queryClient.invalidateQueries(['todos'])
  })
  const {mutate : mutateEdit} = useMutation(handleUpdateTodo,{
    onSuccess : () => queryClient.invalidateQueries(['todos'])
  })



  return (
    <Layout isCompleted={toDoIsCompleted} isEditMode={isEditMode}>
      <Mark>{toDoIsCompleted ? <Check /> : <Circle />}</Mark>
      <div className="content">{todoContent}</div>
      <EventWrapper>
        {isEditMode ? (
          <>
            <Edit className="leftOne"  onClick={() => handleModalOpen('제출하시겠습니까?','submit')}>
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
            <Edit onClick={() => handleModalOpen('정말 삭제하시겠습니까?','delete')}>
              삭제
            </Edit>
          </>
        )}
        {isEditModalOpen && (
          <Modal
            modalClose={handleCloseEditModal}
            todo={todoContent}
            editTodo={editTodo}
            handleCancelEditMode={handleCancelEditMode}
            isCompleted={toDoIsCompleted}
            handleComplete={handleComplete}
          />
        )}
        {isModalOpen === 'submit' ? <ModalAlert leftBtnClick={mutateEdit} leftBtnMessage='네'  rightBtnClick={handleModalClose} rightBtnMessage='아니오'>{modalMessage}</ModalAlert> :<></>}
        {isModalOpen === 'delete'? <ModalAlert  leftBtnClick={()=>mutateDelete(id)}  leftBtnMessage='네' rightBtnClick={handleModalClose} rightBtnMessage='아니오'>{modalMessage}</ModalAlert> :<></>}
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