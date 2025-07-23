
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EstilosGlobais from "./componentes/EstilosGlobais";
import Bemvindo from "./paginas/Bemvindo";
import Medidas from "./paginas/Medidas";
import Mensagens from "./paginas/Mensagens";
import Admin from "./paginas/Admin";
import Menu from "../src/componentes/Menu";

function App(){

return (

    <Router>
      <EstilosGlobais/>
      <Menu/>
      <Routes>
           <Route path = "/" element = { < Bemvindo /> } />
           <Route path="/medidas" element={<Medidas/>} />
           <Route path="/mensagens" element={<Mensagens/>} />
           <Route path="/admin" element={<Admin/>} />

      </Routes>
    
    </Router>
)
}

export default App