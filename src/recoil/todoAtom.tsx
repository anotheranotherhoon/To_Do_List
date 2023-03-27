import { atom } from "recoil";

export const todoAtom = atom<string>({
    key : 'todoAtom',
    default: ''
})