import { signUp } from '../api/auth'
import { ChangeMode, InputWrapper, SubmitBtn, FormContainer } from "./style"
import { useForm } from "react-hook-form";

const SignUp = ({ isSignInMode, handleChangeMode, hadleModalOpen }: any) => {

  interface IForm {
    email: string;
    password: string;
    password1: string;
  }

  const { register, handleSubmit, formState: { errors }, watch } = useForm<IForm>()
  const handleSignUp = (data: IForm)=> {
    signUp({
      email: data.email,
      password: data.password,
    }, hadleModalOpen,
      handleChangeMode
    )
  }
  console.log(watch())
  return (
    <FormContainer onSubmit={handleSubmit(handleSignUp)}>
      <InputWrapper key='1'>
        <label id="email">이메일</label>
        <input {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed",
          }
        })}
        />
        <span>{errors?.email?.message}</span>
      </InputWrapper>
      <InputWrapper key='2'>
        <label id="password">비밀번호</label>
        <input
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: 8
          })}
        />
        <span>{errors?.password?.message}</span>
      </InputWrapper>
      <InputWrapper key='3'>
        <label id="rePassword">비밀번호확인</label>
        <input
          {...register('password1', {
            required: '비밀번호를 다시 입력해주세요.',
            minLength: {
              value: 8,
              message: '비밀번호는 8글자 이상이어야 합니다.'
            }
          })}
        />
      </InputWrapper>
      <ChangeMode type='button' onClick={() => handleChangeMode()}>로그인하러가기</ChangeMode>
      <SubmitBtn>{isSignInMode}</SubmitBtn>
    </FormContainer>
  )
}

export default SignUp