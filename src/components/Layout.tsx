import styled from "styled-components"

interface IChildren {
  children : React.ReactNode
}

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
  height:100vh;
  background-color: #fbfbff;
`

export default Layout