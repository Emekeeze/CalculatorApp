import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.textContent));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleDivide = () => {
    setResult(result.concat('/'));

  };

  const handleMultiply = () => {
    setResult(result.concat('*'));
  };

  const handleSubtract = () => {
    setResult(result.concat('-'));
  };

  return (
    <>
      <div className='container'>
      <h1>Welcome</h1>
        <form className='input'>
          <input type='text' value={result} readOnly />
        </form>
        <div className='keypad'>
          <button onClick={handleClear} className='clear'>
            clear
          </button>
          <button onClick={handleClear} className='c'>
            c
          </button>
          <button onClick={handleDivide} className='divide'>
            &divide;
          </button>
          <button onClick={handleClick} className='7'>
            7
          </button>
          <button onClick={handleClick} className='8'>
            8
          </button>
          <button onClick={handleClick} className='9'>
            9
          </button>
          <button onClick={handleMultiply} className='multiply'>
            &times;
          </button>
          <button onClick={handleClick} className='4'>
            4
          </button>
          <button onClick={handleClick} className='5'>
            5
          </button>
          <button onClick={handleClick} className='6'>
            6
          </button>
          <button onClick={handleSubtract} className='subtract'>
            &ndash;
          </button>
          <button onClick={handleClick} className='1'>
            1
          </button>
          <button onClick={handleClick} className='2'>
            2
          </button>
          <button onClick={handleClick} className='3'>
            3
          </button>
          <button onClick={handleClick} className='add'>
            +
          </button>
          <button onClick={handleClick} className='dot'>
            .
          </button>
          <button onClick={handleCalculate} className='equals'>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
