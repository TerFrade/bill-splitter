import React from "react"
import styled from "styled-components"

import dollarIcon from "../../assets/icon-dollar.svg"
import userIcon from "../../assets/icon-person.svg"
import { TextField, CustomSelect } from "../../elements"

type CalculatorProps = {
  handleChange: (e: any) => void
}

const SelectData = [
  { label: "5%", value: 5 },
  { label: "15%", value: 15 },
  { label: "20%", value: 20 },
  { label: "25%", value: 25 },
  { label: "50%", value: 50 },
]

const Calculator = ({ handleChange }: CalculatorProps) => {
  return (
    <Container>
      <TextField
        label={"Bill"}
        icon={dollarIcon}
        name={"billAmount"}
        type={"number"}
        handleChange={handleChange}
      />
      <CustomSelect SelectData={SelectData} handleChange={handleChange} />
      <TextField
        label={"Number of People"}
        icon={userIcon}
        name={"numberOfPeople"}
        type={"number"}
        handleChange={handleChange}
      />
    </Container>
  )
}

export default Calculator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
