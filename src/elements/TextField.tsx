import React from "react"
import styled from "styled-components"

const TextField = () => {
  return (
    <Container>
      <label htmlFor="text-input">Number of People</label>
      <input type="text" />
    </Container>
  )
}

export default TextField

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
