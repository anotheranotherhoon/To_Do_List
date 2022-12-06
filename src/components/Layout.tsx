import styled from "styled-components"
import { IChildren } from "../type/types"


const Layout = ({children} : IChildren) => {
  return (
    <Container>
    {children}
</Container>
  )
}
const Container  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props)=>props.theme.theme === 'light' ? '#fbfbff' : 'var(--color-darkModeBg)'};
  color : ${(props)=>props.theme.theme === 'light' ? 'var(--color-black)' : 'var(--color-darkModeColor)'};
  height:100%;
  min-height:100vh;
  position : relative;
`

export default Layout