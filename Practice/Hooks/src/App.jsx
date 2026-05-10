import React, { useEffect, useState } from 'react';

export const App = () => {

  const [count, setCount] = useState(0);

  const [input, setInput] = useState('');

  useEffect(() =>{
    console.log("useEffect called with input: ");
    
  },[])


  
  return<>
<fieldset>
  
      <h4>Hooks use</h4>
      
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
</fieldset>
<hr />
<fieldset>
      <h4>Hooks example</h4>
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>

      <p> typed : {input} </p>
</fieldset>

  </>
}

export default App