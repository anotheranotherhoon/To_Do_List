import { useState } from "react"
import { ITodo } from "../type/types"

export const useEditMode = ({id, todo, isCompleted, userId } : ITodo) => {
  const [toDoContent, setToDoContent] = useState<string>(todo)
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
    setToDoContent(todo)
    setToDoIsCompleted(isCompleted)
  }
  const handleComplete = () => {
    setToDoIsCompleted(!toDoIsCompleted)
  }
  const editToDo = (e : React.ChangeEvent<HTMLInputElement>) => {
    setToDoContent(e.target.value)
  }
  const handleCloseEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen)
  }
  return{
    isEditMode,
    isEditModalOpen,
    toDoContent,
    toDoIsCompleted,
    editToDo,
    setIsEditMode,
    setIsEditModalOpen,
    handleEditBtn,
    handleCancelEditMode,
    handleComplete,
    handleCloseEditModal
  }
}