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
      payload: {
        name: e.type === "click" ? "selectedTip" : e.target.name,
        value: isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value),
      },
    })

    dispatch({
      type: "UPDATE_TOTAL",
    })
  }

  const handleClick = () => {
    document.getElementById("create-course-form")?.onreset
    dispatch({ type: "RESET_STATE" })
  }

  return (
    <Container id="create-course-form">
      <Column>
        <Calculator handleChange={handleChange} />
      </Column>
      <Column>
        <Result
          tipAmount={`$${state?.tipAmount}`}
          totalAmount={`$${state?.totalAmount}`}
          handleClick={handleClick}
        />
      </Column>
    </Container>
  )
}

export default BillCalculator

const Container = styled.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  gap: 20px;
  max-width: 300px;
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
