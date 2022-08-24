import React from "react"
import styled from "styled-components"

import { Button, InfoLabel } from "../../elements"

type ResultProps = {
  tipAmount: string
  totalAmount: string
}

const Result = ({ tipAmount, totalAmount }: ResultProps) => {
  return (
    <Container>
      <InfoWrapper>
        <InfoLabel
          title={"Tip Amount"}
          description={"/ person"}
          value={tipAmount}
        />
        <InfoLabel
          title={"Total"}
          description={"/ person"}
          value={totalAmount}
        />
      </InfoWrapper>
      <Button label={"RESET"} />
    </Container>
  )
}

export default Result

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  color: var(--white);
  border-radius: 10px;
  padding: 20px;
  max-width: 410px;
  height: 270px;
  justify-content: space-around;

  @media screen and (min-width: 640px) {
    justify-content: space-between;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 640px) {
    gap: 40px;
  }
`
