import styled from "styled-components"

const Circle = () => {
  return(
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" >
    <StyledCircle cx="25" cy="25" r="22.5" stroke="#0050FF" strokeWidth="5" />
  </svg>
  )
}


const StyledCircle = styled.circle`
  stroke:  ${(props)=>props.theme.theme==='light' ? '#0050FF' : 'var(--color-green)' };
`

export default Circle