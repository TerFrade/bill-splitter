import React from "react"
import styled from "styled-components"

type ButtonProps = {
  label: string
  handleClick: () => void
}

const Button = ({ label, handleClick }: ButtonProps) => {
  return <Action onClick={handleClick}>{label}</Action>
}

export default Button

const Action = styled.button`
  cursor: pointer;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--accent);
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: bold;
  :active:hover {
    color: var(--secondary);
    background-color: var(--accent);
  }
`
