import styled from 'styled-components'

export const ChangeMode = styled.button`
  cursor: pointer;
  background-color: ${(props)=>props.theme.theme==='light' ?'var(--color-mauve)' : 'var(--color-black)' };
  width: 100%;
  color: ${(props)=>props.theme.theme==='light' ?'var(--color-black)' : 'var(--color-darkModeColor)' };
  text-align: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 150%;
  font-weight: bold;
  border:none;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
  h1 {
    font-size: 200%;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: bold;
    font-size: 1.5rem;
    white-space: nowrap;
    margin-bottom: 5%;
  }
  input {
    width: 100%;
    margin-bottom: 5%;
    background-color:${(props)=>props.theme.theme==='light' ? 'var(--color-white)' : 'var(--color-navy)'};
    color : ${(props)=>props.theme.theme==='light' ? 'var(--color-black)' : 'var(--color-gray)'};
    border:${(props)=>props.theme.theme==='light' ? '1px solid var(--color-black)' : 'none'};
  }
  span {
    font-size: 1.3rem;
    margin-bottom: 5%;
  }
`

export const SubmitBtn = styled.button`
  cursor: pointer;
  background-color: ${(props)=>props.theme.theme==='light' ?'var(--color-blue)' : 'var(--color-black)' };
  width: 100%;
  color: ${(props)=>props.theme.theme==='light' ?'var(--color-white)' : 'var(--color-darkModeColor)' };
  border:none;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 150%;
  font-weight: bold;
`