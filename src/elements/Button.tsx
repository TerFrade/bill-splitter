import React from "react"
import styled from "styled-components"

type ButtonProps = {
  label: string
}

const Button = ({ label }: ButtonProps) => {
  return <Action>{label}</Action>
}

export default Button

const Action = styled.button`
  cursor: pointer;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: var(--secondary);
  background-color: var(--accent);
  font-family: var(--main-font);
  font-size: 1.25rem;
  font-weight: bold;
  :active:hover {
    background-color: var(--primary);
  }
`
