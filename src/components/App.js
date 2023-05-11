
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("");

  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label>Enter your name:</label>
          <br></br>
          <input type="text" onChange={(e) =>{setName(e.target.value)}}/>
        </form>
        <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  )
}

export default App
