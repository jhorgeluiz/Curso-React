
// import Pessoa from './components/pessoa'
// import Condicional from './components/Condicional'

import OutraLista from "./components/OutraLista"


function App() {
  const meusItens = ['react', 'vue', 'angular']

  return (
    <>
    {/* <Pessoa
    nome = "jorge"
    idade = "32"
    profissao = "programador"
    foto = "https://via.placeholder.com/150"/> */}

    {/* <h1>Renderizando Condicional</h1>
    <Condicional /> */}

    <h1>Renderização de Lista</h1>
    <OutraLista itens={meusItens} />
    <OutraLista itens={[]} />


    </>
  )
}

export default App
