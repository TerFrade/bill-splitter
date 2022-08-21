import React from "react"
import styled from "styled-components"

const TextField = () => {
  return (
    <Container>
      <label htmlFor="text-input">Number of People</label>
      <input type="text" />
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
  }
`
