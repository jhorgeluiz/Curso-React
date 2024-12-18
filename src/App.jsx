import Evento from './components/Evento'
import Pessoa from './components/pessoa'
import Form from './components/Form'

function App() {
  return (
    <>
    <Pessoa
    nome = "jorge"
    idade = "32"
    profissao = "progr"
    foto = "https://via.placeholder.com/150"/>

    <Evento />
    <Evento />
    <Form />

    </>
  )
}

export default App
