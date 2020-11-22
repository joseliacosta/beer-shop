import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex: 1;
  @media only screen and (min-width: 768px) {
    max-width: 500px;
  }
`

export const Description = styled.label`
  color: transparent;
`
export const Textbox = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #999;
`
