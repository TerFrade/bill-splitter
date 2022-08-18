import React from "react"
import styled from "styled-components"

const index = () => {
  return (
    <Container>
      <Column>
        <Calculator>
          <TextFieldContainer>
            <label htmlFor="text-input">Bill</label>
            <input type="text" />
          </TextFieldContainer>
          <CustomSelect>
            <label htmlFor="custom-select">Select Tip %</label>
            <ul id="custom-select">
              <li>
                <p>1</p>
              </li>
              <li>
                <p>1</p>
              </li>
              <li>
                <p>1</p>
              </li>
              <li>
                <p>1</p>
              </li>
              <li>
                <p>1</p>
              </li>
              <li>
                <input placeholder="Custom" type="text" />
              </li>
            </ul>
          </CustomSelect>
          <TextFieldContainer>
            <label htmlFor="text-input">Number of People</label>
            <input type="text" />
          </TextFieldContainer>
        </Calculator>
      </Column>
      <Column>
        <Result>
          <div>
            <div className="test">
              <div>
                <p className="title">Tip amount</p>
                <p className="description">/ person</p>
              </div>
              <div>
                <p className="money">$4.57</p>
              </div>
            </div>
            <div className="test">
              <div>
                <p className="title">Tip amount</p>
                <p className="description">/ person</p>
              </div>
              <div>
                <p className="money">$4.57</p>
              </div>
            </div>
          </div>
          <button className="reset">RESET</button>
        </Result>
      </Column>
    </Container>
  )
}

export default index

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;

  gap: 20px;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--white);
  color: black;

  @media screen and (min-width: 540px) {
    height: 100%;
    flex-direction: row;
  }
`

const Column = styled.div`
  flex-basis: 100%;
  width: 100%;
  height: 100%;
`
const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Result = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
  background-color: var(--secondary);
  color: var(--white);
  border-radius: 5px;
  padding: 20px;
  max-width: 410px;
  height: 270px;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .test {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;

      div {
        flex-basis: 100%;
        .description {
          font-size: 0.75rem;
        }
        .money {
          font-size: 1.5rem;
          font-weight: bold;
        }
        p {
          margin: 0;
          padding: 0;
        }
      }

      @media screen and (min-width: 280px) {
        flex-wrap: nowrap;
        text-align: start;
        .money {
          text-align: end;
        }
      }
    }

    @media screen and (min-width: 280px) {
      gap: 50px;
    }
  }

  .reset {
    padding: 10px;
  }
`
const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const CustomSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      text-align: center;
      p {
        margin: 0;
        background-color: var(--secondary);
        color: var(--white);
        border-radius: 5px;
        padding: 7px 0px;
      }

      input {
        all: unset;
        width: 100%;
        height: 42%;
        background-color: var(--light);
        border-radius: 5px;
        padding: 10px 0px;
      }
    }
  }
`
