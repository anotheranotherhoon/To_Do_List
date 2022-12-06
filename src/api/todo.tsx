import { getToken } from '../utils/localeStorage';
import axiosInstance from './axiosInstance';
import type { ITodoParam } from '../type/types';

const token = getToken()

export const createTodo = async(todo : ITodoParam)=> {
  await axiosInstance.post('/todos', todo,{
    headers : {
      Authorization : `Bearer ${token}`
    }
  }
  )
};

export const getTodos = async () => {
  const response =  await axiosInstance.get('/todos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const todos = response.data
  return todos
};

export const updateTodo = async (id:number, todo:string, isCompleted:boolean, userId:number) => {
  try {
    await axiosInstance.put(`todos/${id}`, {
      id,
      todo,
      isCompleted,
      userId,
    },{
      headers : {
        Authorization : `Bearer ${token}`
      }
    }).then((res)=>console.log(res))
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async(id :number)=> {
  try {
    await axiosInstance.delete(`todos/${id}`,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
  } catch (error) {
    console.log(error);
  }
};