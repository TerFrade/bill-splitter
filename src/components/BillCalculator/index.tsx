import React from "react"
import styled from "styled-components"

import Calculator from "./Calculator"
import Result from "./Result"

const index = () => {
  return (
    <Container>
      <Column>
        <Calculator />
      </Column>
      <Column>
        <Result />
      </Column>
    </Container>
  )
}

export default index

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: 20px;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--white);
  color: black;

  @media screen and (min-width: 540px) {
    height: 100%;
    flex-direction: row;
  }
`

const Column = styled.div`
  flex-basis: 100%;
  width: 100%;
  height: 100%;
`
