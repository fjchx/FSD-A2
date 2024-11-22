// import React from "react";

// function App(){
//   return(
//     <div>
//       counter-app
//     </div>
//   )
// }export default App

import { useState } from "react"; 
import "./App.css"
const App = () => {
  const [count,setCount] = useState(0);
  return <div className="count-app">
    <h1 className="count-disp">{count}</h1>
    <div className="count-body">
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button  onClick={()=>{setCount(0)}}>Reset</button>
    </div>
    </div>;
};
export default App;