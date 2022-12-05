import {useState} from 'react'
import Layout from '../components/Layout'
import ModalAlert from '../components/ModalAlert'
import SignIn from '../container/SignIn'
import SignUp from '../container/SignUp'

const HomePage = () => {
  const [isSignInMode, setIsSignInMode] = useState('로그인')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('반갑습니다.')

  const handleChangeMode = () => {
    if (isSignInMode === '로그인') {
      setIsSignInMode('회원가입')
    } else {
      setIsSignInMode('로그인')
    }
  }

  const hadleModalOpen = (message : string)  => {
    setModalMessage(message)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <Layout>
        {isSignInMode === '로그인' ? (
          <SignIn isSignInMode={isSignInMode} handleChangeMode={handleChangeMode} hadleModalOpen={hadleModalOpen} />
        ) : (
          <SignUp isSignInMode={isSignInMode} handleChangeMode={handleChangeMode}  hadleModalOpen={hadleModalOpen} />
        )}
      {isModalOpen ? <ModalAlert rightBtnClick={handleModalClose} rightBtnMessage='확인'>{modalMessage}</ModalAlert> : <></>}
    </Layout>
  )
}

export default HomePage