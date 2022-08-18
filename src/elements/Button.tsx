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
  padding: 10px;
`
