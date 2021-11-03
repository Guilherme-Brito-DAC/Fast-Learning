import React, { useState } from 'react'
import './App.css'
import Main from './Components/Main'
import Navbar from "./Components/Navbar"

function App() {

  const [aula_id,setAulaId] = useState(1)

  return (
    <div className="App">
      <Navbar setAulaId={setAulaId}/>
      <Main aula_id={aula_id} setAulaId={setAulaId} />
    </div>
  );
}

export default App;
