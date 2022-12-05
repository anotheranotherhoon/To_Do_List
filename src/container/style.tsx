import styled from 'styled-components'

export const ChangeMode = styled.button`
  cursor: pointer;
  background-color: var(--color-mauve);
  width: 100%;
  color: var(--color-black);
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
  }
  span {
    font-size: 1.3rem;
    margin-bottom: 5%;
  }
`

export const SubmitBtn = styled.button`
  background-color: ${(props)=>props.disabled ? '#dedede' : '#0651f5'};
  width: 100%;
  color: var(--color-white);
  border:none;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 150%;
  font-weight: bold;
`