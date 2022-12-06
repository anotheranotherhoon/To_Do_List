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
import { useModal } from '../hook/useModal'
import { handleLogOut } from '../utils/localeStorage'
import { useFilter } from '../hook/useFilter'
const ToDo = () => {
  const { isModalOpen, modalMessage, handleModalOpen, handleModalClose } = useModal()
  const { filterState, handleFilter } = useFilter()
  const { data, isLoading, isError } = useQuery(
    ['todos'], getTodos
  )


  return (
    <Layout>
      <DarkdModeHandler />
      <Container>
        <Header handleModalOpen={handleModalOpen} />
        <ToDoForm />
        <Filter filterState={filterState} handleFilter={handleFilter} />
        {isLoading && <InfoScreen status='loading' />}
        {isError && <InfoScreen status='error' />}
        {data && filterState === 'all' && data?.map((todo: ITodo) => 
        <Card key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} />)
        }
        {data && filterState === 'done' && data.filter((el: ITodo) => el.isCompleted === true).map((todo: ITodo) => 
        <Card key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} />)}
        {data && filterState === 'notYet' && data.filter((el: ITodo) => el.isCompleted === false).map((todo: ITodo) => 
        <Card key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} />)}
      </Container>
      {isModalOpen === 'logout' ? <ModalAlert leftBtnClick={handleLogOut} leftBtnMessage='네' rightBtnClick={handleModalClose} rightBtnMessage='아니오' >{modalMessage}</ModalAlert> : <></>}
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