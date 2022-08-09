import React from "react"
import styled from "styled-components"

import { Card } from "./elements"

function App() {
  return (
    <Container>
      <Card>
        <div>hello</div>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

export default App
