import DarkdModeHandler from '../components/DarkModeHandler'
import Layout from '../components/Layout'
import ModalAlert from '../components/ModalAlert'
import SignIn from '../container/SignIn'
import SignUp from '../container/SignUp'
import { useIsSignInMode } from '../hook/useIsSignInMode'
import { useModal } from '../hook/useModal'

const HomePage = () => {
  const { isModalOpen,modalMessage,  handleModalOpen, handleModalClose} = useModal()
  const {isSignInMode, handleChangeMode} = useIsSignInMode()

  return (
    <Layout>
      <DarkdModeHandler />
      {isSignInMode === '로그인' ? (
        <SignIn isSignInMode={isSignInMode} handleChangeMode={handleChangeMode} handleModalOpen={handleModalOpen} />
      ) : (
        <SignUp isSignInMode={isSignInMode} handleChangeMode={handleChangeMode} handleModalOpen={handleModalOpen} />
      )}
      {isModalOpen ? <ModalAlert rightBtnClick={handleModalClose} rightBtnMessage='확인'>{modalMessage}</ModalAlert> : <></>}
    </Layout>
  )
}


export default HomePage