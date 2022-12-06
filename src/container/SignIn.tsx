import { ChangeMode, InputWrapper, SubmitBtn, FormContainer } from "./style"
import { useForm } from "react-hook-form";
import { signIn } from "../api/auth";
import type { IAuth, IAuthProps } from "../type/types"; 

const SignIn = ({ isSignInMode, handleChangeMode, handleModalOpen }: IAuthProps) => {
  const { register, handleSubmit,getValues } = useForm<IAuth>()
  const handleSignIn = (data: IAuth) => {
    signIn(data, handleModalOpen)
  }
  const handleEnterPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      handleSignIn(getValues())
    } else {
      return
    }
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSignIn)}>
      <h1>{isSignInMode}</h1>
      <InputWrapper key='1'>
        <label id="email">이메일</label>
        <input
          {...register('email')}
        />
      </InputWrapper>
      <InputWrapper key='2'>
        <label
        >비밀번호</label>
        <input
          {...register('password')}
          onKeyDown={handleEnterPress}
          type='password'
        />
      </InputWrapper>
      <ChangeMode type='button' onClick={() => handleChangeMode()}>회원가입하러가기</ChangeMode>
      <SubmitBtn >{isSignInMode}</SubmitBtn>
    </FormContainer>

  )
}


export default SignIn