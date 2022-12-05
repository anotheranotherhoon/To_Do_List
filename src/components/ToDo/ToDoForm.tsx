import React, { useState } from 'react'
import styled from 'styled-components'
import { createTodo } from '../../api/todo'
import AddBtn from '../../assets/svg/AddBtn'
import ModalAlert from '../ModalAlert'
import {useQueryClient, useMutation} from '@tanstack/react-query';
import { useForm } from "react-hook-form";

interface  ITodo{
  todo : string;
}

const ToDoForm = () => {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState<string>('no')
  const queryClient = useQueryClient()
  const { register, watch, getValues, setValue } = useForm<ITodo>()

  const validateToDoInput = (toDoContent : string)  => {
    return toDoContent.replace(/ /g, "").length >= 1;
  }

  const handleCreateModalOpen = () => {
    if (validateToDoInput(getValues().todo)) {
      handleModalOpen('submit', '할일을 추가하시겠습니까?')
    } else {
      handleModalOpen('empty', '할일을 입력해주세요!')
    }
  }
  const handleModalOpen = (option : string, message : string) => {
    setModalMessage(message)
    setIsModalOpen(option)
  }
  const handleModalClose = () => {
    setIsModalOpen('no')
  }
  const handleEnterPress = (e : React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      handleCreateModalOpen()
      return
    } else {
      return
    }
  }
  const handleCreate = async() => {
    try{
      await createTodo(getValues())
      setValue('todo','')
      handleModalClose()
    }catch{
    }
  }
  const {mutate} = useMutation(handleCreate,{
    onSuccess : () => queryClient.invalidateQueries(['todos'])
  })
  console.log(watch())
  return(
    <FormWrapper>
    <InputWrapper>
      <label id="todo" />
      <input {...register('todo')} onKeyDown={handleEnterPress}/>
      <div onClick={handleCreateModalOpen}>
        <AddBtn />
      </div>
    </InputWrapper>
    {isModalOpen === 'empty' ? <ModalAlert rightBtnClick={handleModalClose} rightBtnMessage='확인' >{modalMessage}</ModalAlert> : <></>}
    {isModalOpen === 'submit' ? <ModalAlert leftBtnClick={mutate} leftBtnMessage='네' rightBtnClick={handleModalClose} rightBtnMessage='아니오' >{modalMessage}</ModalAlert> : <></>}
  </FormWrapper>
  )
}

const FormWrapper = styled.div`
  caret-color: var(--color-blue );
`
const InputWrapper = styled.div`
  display: flex;
  input {
    width: 90%;
  }
  div {
    margin-left: auto;
    cursor: pointer;
  }
  @media screen and (max-width: 413px) {
    input {
    width: 80%;
  }
  }
`

export default ToDoForm