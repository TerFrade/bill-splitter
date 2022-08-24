import React, { useReducer } from "react"
import styled from "styled-components"

import Calculator from "./Calculator"
import { calculatorReducer, INITIAL_STATE } from "./calculatorReducer"
import Result from "./Result"

const BillCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE)

  const handleChange = (e: any) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    })
  }
  // eslint-disable-next-line no-console
  console.log(state)
  return (
    <Container>
      <Column>
        <Calculator handleChange={handleChange} />
      </Column>
      <Column>
        <Result
          tipAmount={`$${state?.billAmount}`}
          totalAmount={`$${state?.numberOfPeople}`}
        />
      </Column>
    </Container>
  )
}

export default BillCalculator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: 20px;
  max-width: 280px;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--white);
  color: black;

  @media screen and (min-width: 640px) {
    flex-direction: row;
    height: 100%;
    max-width: 680px;
  }
`

const Column = styled.div`
  flex-basis: 100%;
  width: 100%;
  height: 100%;
`
