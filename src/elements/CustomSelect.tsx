import React, { useCallback, useState } from "react"
import styled from "styled-components"

import TextField from "./TextField"

type SelectProps = {
  SelectData: any[]
  handleChange: (e: any) => void
}
const Select = ({ SelectData, handleChange }: SelectProps) => {
  const [active, setActive] = useState<number | null>(null)

  const handleFunctions = useCallback(
    (e: any, i: number | null) => {
      setActive(i)
      handleChange(e)
    },
    [handleChange]
  )

  const renderSelectData = () => {
    return SelectData.map((item: any, i: number) => {
      return (
        <li
          key={i}
          className={active === i ? "active" : ""}
          onClick={(e) => {
            handleFunctions(e, i)
          }}
          value={item.value}
        >
          {item.label}
        </li>
      )
    })
  }

  return (
    <Container>
      <label htmlFor="custom-select">Select Tip %</label>
      <ul id="custom-select">
        {renderSelectData()}
        <div
          onClick={(e) => {
            handleFunctions(e, null)
          }}
        >
          <TextField
            placeholder="Custom"
            type={"number"}
            name={"selectedTip"}
            handleChange={handleChange}
          />
        </div>
      </ul>
    </Container>
  )
}

export default Select

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    color: var(--dark);
    font-size: 0.85rem;
    font-weight: bold;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 0;
    margin: 0;
    text-align: center;

    li {
      cursor: pointer;
      font-weight: bold;
      list-style-type: none;
      background-color: var(--secondary);
      color: var(--white);
      border-radius: 5px;
      padding: 7px 0px;
    }

    .active {
      background-color: var(--primary);
    }

    div {
      height: 100%;
      input {
        all: unset;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: var(--light);
        color: var(--secondary);
        font-weight: bold;

        :focus-visible {
          outline: none;
          outline: 1px solid #ddd6fe;
        }

        ::selection {
          background: var(--accent);
        }
      }
    }

    @media screen and (min-width: 640px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
