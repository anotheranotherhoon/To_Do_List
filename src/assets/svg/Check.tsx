import styled from "styled-components"

const Check = () => {
  return(
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" >
    <StyledPath
      d="M20 40L10 27.7285L14.4469 22.2715L20 29.1053L35.5531 10L40 15.457L20 40Z"
    />
    <StyledCircle cx="25" cy="25" r="22.5" stroke="#0050FF" strokeWidth="5" />
  </svg>
  )
}

const StyledPath = styled.path`
  fill : ${(props)=>props.theme.theme==='light' ? '#0050FF' : 'var(--color-green)' };
`

const StyledCircle = styled.circle`
  stroke:  ${(props)=>props.theme.theme==='light' ? '#0050FF' : 'var(--color-green)' };
`
export default Check