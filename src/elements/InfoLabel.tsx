import React from "react"
import styled from "styled-components"

type InfoLabelProps = {
  title: string
  description: string
  value: string
}

const InfoLabel = ({ title, description, value }: InfoLabelProps) => {
  return (
    <Container>
      <Label>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </Label>
      <Info>
        <p className="money">{value}</p>
      </Info>
    </Container>
  )
}

export default InfoLabel

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  p {
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 284px) {
    flex-wrap: nowrap;
    text-align: start;
    .money {
      text-align: end;
    }
  }
`

const Label = styled.div`
  flex-basis: 100%;
  .description {
    font-size: 0.75rem;
  }
`

const Info = styled.div`
  flex-basis: 100%;
  .money {
    font-size: 1.5rem;
    font-weight: bold;
  }
`
