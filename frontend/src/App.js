import React, { useState } from 'react'
import './App.css'
import Main from './Components/Main'
import Navbar from "./Components/Navbar"

function App() {

  const [aula , setAula] = useState({
    "id": 1,
    "titulo": "Componentes Básicos",
    "conteudo": 'Os componentes do aplicativo são os blocos de construção essenciais de um aplicativo Android. Esses componentes são fracamente acoplados pelo arquivo de manifesto do  aplicativo Android Manifest.xml, que descreve cada componente do aplicativo e  como eles interagem.  "Temos quatro componentes básicos, entre eles temos as Activities que ditam a IU e lidam com a interação do usuário com a tela do smartphone, os Services que lidam com o processamento em segundo plano associado a um aplicativo, os Broadcast Receivers que lidam com a comunicação entre o  sistema operacional Android e os aplicativos e os Content Providers que lidam com problemas de gerenciamento de dados e banco de dados',
    "modulo_id": 1,
    "tipo": "video",
    "video": "n3n-XMNBOf4",
})

  return (
    <div className="App">
      <Navbar setAula={setAula}/>
      <Main aula={aula} />
    </div>
  );
}

export default App;
