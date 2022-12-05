import { ChangeMode, InputWrapper, SubmitBtn, FormContainer } from "./style"
import { useForm } from "react-hook-form";
import { signIn } from "../api/auth";

interface IForm {
  email: string;
  password: string;
}

const SignIn = ({ isSignInMode, handleChangeMode, hadleModalOpen }: any) => {
  const { register, handleSubmit, watch,getValues } = useForm<IForm>()
  console.log(watch())
  const handleSignIn = (data: IForm) => {
    signIn(data, hadleModalOpen)
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
        />
      </InputWrapper>
      <ChangeMode type='button' onClick={(e) => handleChangeMode(e)}>회원가입하러가기</ChangeMode>
      <SubmitBtn >{isSignInMode}</SubmitBtn>
    </FormContainer>

  )
}


export default SignIn