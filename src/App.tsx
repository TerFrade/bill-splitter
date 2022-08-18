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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App
