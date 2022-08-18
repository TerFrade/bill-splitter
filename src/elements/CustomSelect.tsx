import React from "react"
import styled from "styled-components"

const Select = () => {
  return (
    <Container>
      <label htmlFor="custom-select">Select Tip %</label>
      <ul id="custom-select">
        <li>
          <p>1</p>
        </li>
        <li>
          <p>1</p>
        </li>
        <li>
          <p>1</p>
        </li>
        <li>
          <p>1</p>
        </li>
        <li>
          <p>1</p>
        </li>
        <li>
          <input placeholder="Custom" type="text" />
        </li>
      </ul>
    </Container>
  )
}

export default Select

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      text-align: center;
      p {
        margin: 0;
        background-color: var(--secondary);
        color: var(--white);
        border-radius: 5px;
        padding: 7px 0px;
      }

      input {
        all: unset;
        width: 100%;
        height: 42%;
        background-color: var(--light);
        border-radius: 5px;
        padding: 10px 0px;
      }
    }
  }
`
