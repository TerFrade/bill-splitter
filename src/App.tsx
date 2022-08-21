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
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 640px) {
    min-height: 100vh;
  }
`

export default App
