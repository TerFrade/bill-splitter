import React from "react"
import styled from "styled-components"

type TextFieldProps = {
  label?: string
  icon?: any
  placeholder?: string
  type: string
  name?: string
  handleChange: (e: any) => void
}

const TextField = ({
  label,
  icon,
  placeholder,
  type,
  name,
  handleChange,
}: TextFieldProps) => {
  const formattedLabel = label?.toLowerCase().replaceAll(" ", "-")
  return (
    <Container>
      {label && <label htmlFor={`text-input-${formattedLabel}`}>{label}</label>}
      {icon && <img src={icon} draggable="false" />}
      <input
        id={`text-input-${formattedLabel}`}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={(e) => {
          handleChange(e)
        }}
      />
    </Container>
  )
}

export default TextField

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    color: var(--dark);
    font-size: 0.85rem;
    font-weight: bold;
  }

  img {
    position: absolute;
    transform: translateY(190%);
    padding: 0px 10px;
    width: 13px;
    height: 18px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  input {
    all: unset;
    height: 2.25rem;
    padding: 0px 10px;
    border-radius: 5px;
    color: var(--secondary);
    background-color: var(--light);
    font-family: var(--main-font);
    font-size: 1.25rem;
    font-weight: bold;
    text-align: end;

    :focus-visible {
      outline: 1px solid #ddd6fe;
    }

    ::selection {
      background: var(--accent);
    }

    /* Removes number spinner for Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  /* Removes number spinner for Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`
