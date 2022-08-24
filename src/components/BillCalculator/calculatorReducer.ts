type CalculatorModel = {
  billAmount: number
  selectedTip: number
  numberOfPeople: number
  tipAmount: number
  totalAmount: number
}

export const INITIAL_STATE: CalculatorModel = {
  billAmount: 0,
  selectedTip: 0,
  numberOfPeople: 1,
  tipAmount: 0,
  totalAmount: 0,
}

export const calculatorReducer = (
  state: CalculatorModel = INITIAL_STATE,
  action: {
    type: string
    payload: any
  }
) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
  }
}
