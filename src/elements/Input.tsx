import React, { ChangeEvent } from "react"
import styled from "styled-components"

type InputProps = {
  label?: string
  icon?: string
  placeholder?: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, icon, placeholder, handleChange }: InputProps) => {
  // For Parent Component
  // function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //     // eslint-disable-next-line no-console
  //     console.log(e.target.value, e)
  //   }
  return (
    <Container>
      <label htmlFor="text-input">{label}</label>
      <InputWrapper>
        <img src={icon} />
        <TextInput
          id="text-input"
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </InputWrapper>
    </Container>
  )
}

export default Input

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: var(--ms-large-1);
`

const InputWrapper = styled.div`
  img {
    position: absolute;
    padding: 9px;
  }
  input[type="text"] {
    color: var(--secondary);
    font-family: var(--main-font);
  }
`

const TextInput = styled.input`
  height: var(--ms-large-3);
  font-size: var(--ms-large-3);
  border: 2px solid var(--white);
  border-radius: 5px;
  text-align: right;
  :focus {
    outline: none;
    border: 2px solid var(--primary);
  }
`
