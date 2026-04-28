import { useState } from "react"

export const App = () => {

    var [count, setCount] = useState(0)

    const incr = () =>{
        setcount(count + 1)
    }

    const decr = ()=>{
        setCount(count-1)
    }


}
return <>
<h2>Counter App</h2>
<button onClick={incr}>+</button>
<span>{count}</span>
<button onClick={decr}>-</button>

</>

export default App