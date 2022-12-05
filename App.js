import React, { useEffect, useRef, useState } from 'react';

import './App.css';

  const App=()=> {
  const [output,setOutput]=useState("");
  const inputRef= useRef(null);
  useEffect(()=> inputRef.current.focus());

 
  const clickHandler=(event)=>{
    setOutput(output + event.target.value);
  }

  const Clear=()=>{
    setOutput(" ");
  }

  const Calculate=()=>{
    try{
      setOutput(eval(output).toString());
    }catch(error){
      setOutput("Error")
    }
  }
  return (
    
    <div className="calsi">
      <h1>Calculater</h1>
      <input type="text" id="output" value={output} ref={inputRef}/>
      <button value="7" onClick={clickHandler}>7</button>
      <button value="8" onClick={clickHandler}>8</button>
      <button value="9" onClick={clickHandler}>9</button>
      <button value="4" onClick={clickHandler}>4</button>
      <button value="5" onClick={clickHandler}>5</button>
      <button value="6" onClick={clickHandler}>6</button>
      <button value="1" onClick={clickHandler}>1</button>
      <button value="2" onClick={clickHandler}>2</button>
      <button value="3" onClick={clickHandler}>3</button>
      <button value="0" onClick={clickHandler}>0</button>
      <button value="." onClick={clickHandler}>.</button>
      <button value="+" onClick={clickHandler}>+</button>
      <button value="-" onClick={clickHandler}>-</button>
      <button value="*" onClick={clickHandler}>*</button>
      <button value="/" onClick={clickHandler}>/</button>
      <button value="%" onClick={clickHandler}>%</button>
      <button id='clear' value="C" onClick={Clear}><b>C</b></button>
      <button id='result' value="=" onClick={Calculate}>=</button>

    </div>
  );
}

export default App;
