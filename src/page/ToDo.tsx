import { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../api/todo"
import Layout from "../components/Layout"
import ToDoForm from '../components/ToDo/ToDoForm'
import Filter from '../components/ToDo/Filter'
import Card from '../components/ToDo/Card'
import ModalAlert from '../components/ModalAlert'
import InfoScreen from '../components/InfoScreen/InfoScreen';
import DarkdModeHandler from '../components/DarkModeHandler'
import Header from '../components/ToDo/Header'
import type { ITodo } from '../type/types'

const ToDo = () => {
  const [isModalOpen, setIsModalOpen] = useState<number>(0)
  const [modalMessage, setModalMessage] = useState<string>('')
  const [filterState, setFilterState] = useState<string>('all')
  const { data, isLoading, isError } = useQuery(
    ['todos'], getTodos
  )

  const handleModalOpen = (option: number, message: string) => {
    setModalMessage(message)
    setIsModalOpen(option)
  }
  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    window.location.reload()
  }
  const handleModalClose = () => {
    setIsModalOpen(0)
  }
  const handleFilter = (filter : string) => {
    setFilterState(filter)
  }

  return (
    <Layout>
      <DarkdModeHandler />
      <Container>
        <Header handleModalOpen={handleModalOpen}/>
        <ToDoForm />
        <Filter filterState={filterState}  handleFilter={handleFilter}/>
        {isLoading && <InfoScreen status='loading' />}
        {isError && <InfoScreen status='error'/>}
        {data && filterState === 'all' &&  data?.map((todo: ITodo) =><Card key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} />)
        }
        {data && filterState === 'done' &&  data.filter((el : ITodo)=>el.isCompleted===true).map((todo: ITodo) =><Card key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} />)}
        {data && filterState === 'notYet' &&  data.filter((el : ITodo)=>el.isCompleted===false).map((todo: ITodo) =><Card key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} />) }
      </Container>
      {isModalOpen === 1 ? <ModalAlert leftBtnClick={handleLogOut} leftBtnMessage='네' rightBtnClick={handleModalClose} rightBtnMessage='아니오' >{modalMessage}</ModalAlert> : <></>}
    </Layout>
  )

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  @media screen and (max-width: 413px) {
    width: 80%;
  }
`



export default ToDo