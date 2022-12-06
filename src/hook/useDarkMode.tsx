import { useRecoilState } from 'recoil'
import {theme} from '../recoil/darkMode'

export const useDarkMode = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme)
  const themeState = currentTheme.theme
  const handleThemeChange = () : void => {
    if(themeState==='light'){
      window.localStorage.setItem('theme','dark')
      setCurrentTheme({theme : 'dark'})
    }else{
      window.localStorage.setItem('theme','light')
      setCurrentTheme({theme : 'light'})
    }
  }
  return {handleThemeChange, themeState}
}
