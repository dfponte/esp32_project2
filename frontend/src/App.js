
import React from "react";


const Teste = function(){
  fetch('/api').then(resultado=>{
    console.log(resultado);
  })
}

function App(){

return (

    <div>
      {Teste()}
      <h1>Olá React</h1>
    </div>



)
}

export default App