import { useState } from 'react'

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean | string>(false)
  const [modalMessage, setModalMessage] = useState<string>('.')
  interface IModal {
    (message : string, option? : string) : void
  }
  const handleModalOpen : IModal = (message, option) => {
    setModalMessage(message)
    if(option){
      setIsModalOpen(option)
    }else{
      setIsModalOpen(true)
    }
  }
  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  return {
    isModalOpen,modalMessage,  handleModalOpen, handleModalClose
  }
}

