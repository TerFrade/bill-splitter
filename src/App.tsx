import React from "react"
import styled from "styled-components"

import { BillCalculator } from "./components"

function App() {
  return (
    <Container>
      <BillCalculator />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-items: center;

  @media screen and (min-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`

export default App
