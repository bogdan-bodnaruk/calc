import { useCalculator } from './CalculatorContext';

const Calculator = () => {
  // @ts-ignore
  const { state, dispatch } = useCalculator();

  const handleInputNumber = (number) => {
    dispatch({ type: "INPUT_NUMBER", payload: number });
  };

  const handleInputOperator = (operator) => {
    dispatch({ type: "INPUT_OPERATOR", payload: operator });
  };

  const handleEquals = () => {
    dispatch({ type: "EQUALS" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="calculator">
      <div>
        <input type="text" defaultValue={state.displayValue} />
      </div>
      <div>
        <button onClick={() => handleInputNumber(1)}>1</button>
        <button onClick={() => handleInputNumber(2)}>2</button>
        <button onClick={() => handleInputNumber(3)}>3</button>
        <button onClick={() => handleInputOperator("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleInputNumber(4)}>4</button>
        <button onClick={() => handleInputNumber(5)}>5</button>
        <button onClick={() => handleInputNumber(6)}>6</button>
        <button onClick={() => handleInputOperator("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleInputNumber(7)}>7</button>
        <button onClick={() => handleInputNumber(8)}>8</button>
        <button onClick={() => handleInputNumber(9)}>9</button>
        <button onClick={() => handleInputOperator("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleInputNumber(0)}>0</button>
        <button onClick={() => handleClear}>C</button>
        <button onClick={() => handleEquals}>=</button>
        <button onClick={() => handleInputOperator("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
