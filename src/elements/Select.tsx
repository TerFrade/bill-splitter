import React, { ChangeEvent, useCallback, useState } from "react"
import styled from "styled-components"

interface ChoiceModel {
  label: string
  value: string | number
}

type SelectProps = {
  label?: string
  choices: ChoiceModel[]
  customType?: React.HTMLInputTypeAttribute
  placeholder?: string
}

const Select = ({ label, choices, customType, placeholder }: SelectProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState<any>(null)

  const handleClick = useCallback((index: number | null) => {
    setActiveItem(index)
  }, [])

  function renderChoice() {
    return choices.map((item, i) => {
      return (
        <ListItem
          key={i}
          className={activeItem === i ? "active" : ""}
          onClick={() => handleClick(i)}
          value={item.value}
        >
          {item.label}
        </ListItem>
      )
    })
  }

  return (
    <Container>
      <label htmlFor="select-ListItemst">{label}</label>
      <ListItemstWrapper id="select-ListItemst">
        {renderChoice()}
        <ListCustomItem
          type={customType || "text"}
          placeholder={placeholder}
          onClick={() => handleClick(null)}
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value)
          }}
        />
      </ListItemstWrapper>
    </Container>
  )
}

export default Select

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: var(--ms-large-1);
`

const ListItemstWrapper = styled.ul`
  list-style-type: none;
  font-weight: 600;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  .active {
    background-color: var(--primary);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  /* Removes number spinner on Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /*Removes number spinner on Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`

const ListItem = styled.li`
  padding: 0.3rem 2rem;
  background-color: var(--secondary);
  border-radius: 5px;
  font-size: var(--ms-large-2);
  cursor: pointer;

  //Ignores highlighting of text
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`

const ListCustomItem = styled.input`
  max-width: 103.17px;
  background-color: var(--light);
  border-radius: 5px;
  font-size: var(--ms-large-2);
  font-weight: 600;
  text-align: center;
  color: var(--secondary);
  border: 2px solid transparent;

  ::placeholder {
    color: var(--secondary);
    opacity: 0.7;
  }
  :focus {
    outline: none;
    border: 2px solid var(--primary);
  }
`
