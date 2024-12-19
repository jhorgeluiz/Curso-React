
import Pessoa from './components/pessoa'

import Condicional from './components/Condicional'


function App() {
  return (
    <>
    <Pessoa
    nome = "jorge"
    idade = "32"
    profissao = "programador"
    foto = "https://via.placeholder.com/150"/>


      <h1>Renderizando Condicional</h1>
      <Condicional />


    </>
  )
}

export default App
