import styled from 'styled-components'
import { DarkModeHook } from '../hook/DarkModeHook'
import Day from '../assets/svg/Day'
import Night from '../assets/svg/Night'

const DarkdModeHandler = () => {
  const { handleThemeChange, themeState } = DarkModeHook()
  return(
    <DarkMode onClick={handleThemeChange}>
    {themeState === 'light' ?
      <Night />
      :
      <Day />
    }
  </DarkMode>
  )
}

const DarkMode = styled.div`
  position : absolute;
  bottom:10%;
  right:10%;

`

export default DarkdModeHandler