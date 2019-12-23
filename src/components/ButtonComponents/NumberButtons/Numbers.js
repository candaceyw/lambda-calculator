import React, {useState} from "react";
import { numbers } from '../../../data';

import NumberButton from './NumberButton';

const Numbers = () => {
  // STEP 2 - add the imported data to state
    const [ nums ] = useState(numbers);

  return (
    <div className="numbers">
     
     {nums.map((number, idx) => {
       return <NumberButton key={idx} number={number} />
     })}
     </div>
  );
};

export default Numbers;