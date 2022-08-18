import React from "react"
import styled from "styled-components"

import { TextField, CustomSelect } from "../../elements"

const Calculator = () => {
  return (
    <Container>
      <TextField />
      <CustomSelect />
      <TextField />
    </Container>
  )
}

export default Calculator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
