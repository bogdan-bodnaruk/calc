import { createContext, useContext, useReducer } from 'react';

const initialState = {
  displayValue: "0",
  operator: null,
  firstOperand: null,
  waitingForSecondOperand: false,
};

const CalculatorContext = createContext(initialState);

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_NUMBER":
      return {
        ...state,
        displayValue: state.waitingForSecondOperand
          ? String(action.payload)
          : state.displayValue === "0"
          ? String(action.payload)
          : state.displayValue + action.payload,
        waitingForSecondOperand: false,
      };

    case "INPUT_OPERATOR":
      return {
        ...state,
        operator: action.payload,
        firstOperand: state.displayValue,
        waitingForSecondOperand: true,
      };

    case "EQUALS":
      const secondOperand = state.displayValue;
      const result = calculate(
        parseFloat(state.firstOperand),
        parseFloat(secondOperand),
        state.operator
      );

      return {
        ...state,
        displayValue: String(result),
        operator: null,
        firstOperand: null,
        waitingForSecondOperand: false,
      };

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};

const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const value = { state, dispatch };

  return (
    // @ts-ignore
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

const useCalculator = () => {
  return useContext(CalculatorContext);
};

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
};

export { CalculatorProvider, useCalculator };
