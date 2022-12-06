import { useState } from 'react'

export const useIsSignInMode = () => {
  const [isSignInMode, setIsSignInMode] = useState('로그인')
  const handleChangeMode = () => {
    if (isSignInMode === '로그인') {
      setIsSignInMode('회원가입')
    } else {
      setIsSignInMode('로그인')
    }
    
  }
  return{
    isSignInMode, handleChangeMode
  }
  
}