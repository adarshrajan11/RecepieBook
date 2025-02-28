// import React, { useState } from 'react'
// import Display from '../component/Display'
// import Button from '../component/Button'

// const Calculator = () => {
//     const [displayValue, setDisplayValue] = useState('0');

//     const handleButtonClick = (value: string) => {
//         setDisplayValue(prevValue => {
//             if (prevValue === '0' && value !== '.') {
//                 return value;
//             } else {
//                 return prevValue + value;
//             }
//         });
//     };
//     return (
//         <div className='calculator'>
//             <Display value={displayValue} />
//             <div className="buttons">
//                 <Button onClick={() => handleButtonClick('1')}>1</Button>
//                 <Button onClick={() => handleButtonClick('2')}>2</Button>
//                 <Button onClick={() => handleButtonClick('3')}>3</Button>
//                 <Button onClick={() => handleButtonClick('+')}>+</Button>
//                 <Button onClick={() => handleButtonClick('-')}>-</Button>
//                 <Button onClick={() => handleButtonClick('*')}>*</Button>
//                 <Button onClick={() => handleButtonClick('4')}>4</Button>
//                 <Button onClick={() => handleButtonClick('5')}>5</Button>
//                 <Button onClick={() => handleButtonClick('6')}>6</Button>
//                 <Button onClick={() => handleButtonClick('7')}>7</Button>
//                 <Button onClick={() => handleButtonClick('8')}>8</Button>
//                 <Button onClick={() => handleButtonClick('9')}>9</Button>
//                 <Button onClick={() => handleButtonClick('0')}>0</Button>
//                 <Button onClick={() => handleButtonClick('.')}>.</Button>
//                 <Button onClick={() => handleButtonClick('=')}>=</Button>
//                 <Button onClick={() => handleButtonClick('/')}>/</Button>
//             </div>

//         </div>
//     )
// }

// export default Calculator
