import axiosInstance from './axiosInstance'
import { setToken } from '../utils/localeStorage'
import type { IAuth } from '../type/types';




export const signIn = async (data: IAuth, hadleModal: Function): Promise<void> => {
  try {
    const response = await axiosInstance.post('/auth/signin', data)
    const accessToken = response.data.access_token
    setToken(accessToken)
    window.location.reload();
  } catch (error) {
    if (error.response.status === 404) {
      hadleModal('해당 사용자가 존재하지 않습니다');
    }
    else if (error.response.status === 401) {
      hadleModal('정확한 아이디와 비밀번호를 입력해주세요');
    }
    else {
      hadleModal('"잘못된 요청입니다"');
    }
  }
};

export const signUp = async (data: IAuth, hadleModal: Function, handleChangeMode: Function): Promise<void> => {
  try {
    const response = await axiosInstance.post('/auth/signup', data)
    if (response.status === 201) {
      hadleModal('회원가입에 성공하셨습니다!');
      handleChangeMode();
    }
  } catch (error) {
    if (error.response.status === 400) {
      hadleModal('동일한 이메일이 이미 존재합니다');
    }
    else {
      hadleModal('"잘못된 요청입니다"');
    }
  }
};