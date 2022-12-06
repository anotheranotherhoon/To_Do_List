import React from 'react'
import styled from 'styled-components'
import { createTodo } from '../../api/todo'
import AddBtn from '../../assets/svg/AddBtn'
import ModalAlert from '../ModalAlert'
import {useQueryClient, useMutation} from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import type { ITodoParam } from '../../type/types' 
import { useModal } from '../../hook/useModal'
import { validateToDoInput } from '../../utils/regex'

const ToDoForm = () => {
  const {isModalOpen,modalMessage,  handleModalOpen, handleModalClose} = useModal() 
  const queryClient = useQueryClient()
  const { register, getValues, setValue } = useForm<ITodoParam>()

  const handleCreateModalOpen = () => {
    if (validateToDoInput(getValues().todo)) {
      handleModalOpen( '할일을 추가하시겠습니까?', 'submit')
    } else {
      handleModalOpen( '할일을 입력해주세요!', 'empty')
    }
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
  
  return(
    <FormWrapper>
    <InputWrapper>
      <label id="todo" />
      <input {...register('todo')} onKeyDown={handleEnterPress}/>
      <div onClick={handleCreateModalOpen}>
        <AddBtn />
      </div>
    </InputWrapper>
    {isModalOpen === 'empty' && <ModalAlert rightBtnClick={handleModalClose} rightBtnMessage='확인' >{modalMessage}</ModalAlert>}
    {isModalOpen === 'submit' && <ModalAlert leftBtnClick={mutate} leftBtnMessage='네' rightBtnClick={handleModalClose} rightBtnMessage='아니오' >{modalMessage}</ModalAlert>}
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
    background-color:${(props)=>props.theme.theme==='light' ? 'var(--color-white)' : 'var(--color-navy)'};
    color : ${(props)=>props.theme.theme==='light' ? 'var(--color-black)' : 'var(--color-gray)'};
    border:${(props)=>props.theme.theme==='light' ? '1px solid var(--color-black)' : 'none'};
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