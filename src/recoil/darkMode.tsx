import { atom } from "recoil";
import type { ITheme } from "../type/types";

const initialTheme = localStorage.getItem('theme') || 'light';

export const theme = atom<ITheme>({
    key : 'theme',
    default: {theme : initialTheme}
})