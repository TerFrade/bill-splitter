import React from "react"
import styled from "styled-components"

import dollarIcon from "../../assets/icon-dollar.svg"
import userIcon from "../../assets/icon-person.svg"
import { TextField, CustomSelect } from "../../elements"

const Calculator = () => {
  return (
    <Container>
      <TextField label={"Bill"} icon={dollarIcon} type={"number"} />
      <CustomSelect />
      <TextField label={"Number of People"} icon={userIcon} type={"number"} />
    </Container>
  )
}

export default Calculator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
