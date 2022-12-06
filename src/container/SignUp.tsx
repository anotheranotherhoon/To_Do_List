import { signUp } from '../api/auth'
import { ChangeMode, InputWrapper, SubmitBtn, FormContainer } from "./style"
import { useForm } from "react-hook-form";
import { IAuthProps,ISignUpAuth } from '../type/types';

const SignUp = ({ isSignInMode, handleChangeMode, hadleModalOpen }: IAuthProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm<ISignUpAuth>()
  console.log(errors?.password?.message)
  const handleSignUp = (data: ISignUpAuth) => {
    signUp({
      email: data.email,
      password: data.password,
    }, hadleModalOpen,
      handleChangeMode
    )
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSignUp)}>
      <h1>{isSignInMode}</h1>
      <InputWrapper key='1'>
        <label id="email">이메일</label>
        <input {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: {
            value: /@/,
            message: "이메일은 @를 포함하셔야합니다.",
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
            pattern : {
              value : /.{8,}/,
              message: "비밀번호는 8자 이상이어야 합니다.",
            }
          })}
          type='password'
        />
        <span>{errors?.password?.message}</span>
      </InputWrapper>
      <InputWrapper key='3'>
        <label id="rePassword">비밀번호확인</label>
        <input
          {...register('password1', {
            required: '비밀번호를 다시 입력해주세요.',
          })}
          type='password'
        />
      </InputWrapper>
      <ChangeMode type='button' onClick={() => handleChangeMode()}>로그인하러가기</ChangeMode>
      <SubmitBtn>{isSignInMode}</SubmitBtn>
    </FormContainer>
  )
}

export default SignUp