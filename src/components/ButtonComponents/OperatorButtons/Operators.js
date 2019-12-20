import React, {useState} from "react";

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import {operators} from '../../../data';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [opState] = useState(operators);

  return (
    <div>
      {
        opState.map((op, i) => {
          return <OperatorButton key={i} operator={op.char} fnc={props.onButtonPress}/>;
        })
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;
