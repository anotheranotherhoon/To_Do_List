// import { UseMutateFunction } from "@tanstack/react-query";
// import { AxiosError } from "axios";

export interface ITodo {
  id:number;
  todo : string;
  isCompleted : boolean;
  userId : number;
}

export interface IEditMode {
  todo : string;
  isCompleted : boolean
}

export interface ITodoParam{
  todo : string
}

export interface IAuth {
  email: string;
  password: string
}

export interface IAuthProps {
  isSignInMode : string;
  handleChangeMode() : void;
  handleModalOpen(message:string) : void;
}

export interface ISignUpAuth {
  email: string;
  password: string;
  password1: string;
}

export interface IChildren {
  children : React.ReactNode
}

export interface IModal {
  modalClose : ()=>void;
  todo : string,
  editToDo(e : React.ChangeEvent<HTMLInputElement>) : void,
  handleCancelEditMode : ()=>void,
  isCompleted : boolean,
  handleComplete : () =>void
}

export interface IModalAlert {
  children : string,
  leftBtnMessage ?: string;
  rightBtnMessage? : string,
  leftBtnClick ?: () =>void ,
  // leftBtnClick : UseMutateFunction<ITodo, AxiosError, ITodo, unknown> | () => void,
  rightBtnClick ?: ()=>void,
}

export interface IStatus {
  status : string;
}

export interface ITheme {
  theme : string
}

export interface ILayout {
  isCompleted : boolean, 
  isEditMode : boolean
  theme :ITheme,
}

export interface IFilter {
  filterState : string;
  handleFilter(state : string) : void
}

export interface IStyledFilter {
  state : string;
  current : string
}

export interface IHeader {
  handleModalOpen(message : string, number : string,) : void;
}
