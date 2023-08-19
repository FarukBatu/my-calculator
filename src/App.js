import './App.css';
import { useState } from 'react';

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const calculateResult = () => {
    let calculatedResult;

    switch (operation) {
      case 'add':
        calculatedResult = Number(num1) + Number(num2);
        break;
      case 'subtract':
        calculatedResult = Number(num1) - Number(num2);
        break;
      case 'multiply':
        calculatedResult = Number(num1) * Number(num2);
        break;
      case 'divide':
        calculatedResult = Number(num1) / Number(num2);
        break;
      default:
        calculatedResult = '';
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <h2>Arithmetic Calculator</h2>
      <div>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={handleNum1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={num2} onChange={handleNum2Change} />
        </label>
      </div>
      <div>
        <label>
          Operation:
          <select value={operation} onChange={handleOperationChange}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={calculateResult}>Calculate</button>
      </div>
      <div>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default App;
