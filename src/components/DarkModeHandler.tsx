import styled from 'styled-components'
import { useDarkMode } from '../hook/useDarkMode'
import Day from '../assets/svg/Day'
import Night from '../assets/svg/Night'

const DarkdModeHandler = () => {
  const { handleThemeChange, themeState } = useDarkMode()
  return (
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
  position : fixed;
  top:10%;
  left:20%;
  @media screen and (max-width: 413px) {
    top:10%;
    left:4%;
  }
`

export default DarkdModeHandler