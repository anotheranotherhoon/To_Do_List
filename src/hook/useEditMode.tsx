import { useState } from "react"
import { IEditMode } from "../type/types"
export const useEditMode = ({todo, isCompleted } : IEditMode) => {
  const [todoContent, setTodoContent] = useState<string>(todo)
  const [toDoIsCompleted, setToDoIsCompleted] = useState<boolean>(isCompleted)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState<Boolean>(false)


  const handleEditBtn = () => {
    setIsEditMode(true)
    setIsEditModalOpen(true)
  }
  const handleCancelEditMode = () => {
    setIsEditMode(false)
    setIsEditModalOpen(false)
    setTodoContent(todo)
    setToDoIsCompleted(isCompleted)
  }
  const handleComplete = () => {
    setToDoIsCompleted(!toDoIsCompleted)
  }
  const editTodo = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value)
  }
  const handleCloseEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen)
  }
  return{
    isEditMode,
    isEditModalOpen,
    todoContent,
    toDoIsCompleted,
    editTodo,
    setIsEditMode,
    setIsEditModalOpen,
    handleEditBtn,
    handleCancelEditMode,
    handleComplete,
    handleCloseEditModal
  }
}