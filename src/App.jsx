import SayMyName from './components/SayMyName'
import HelloWord from './components/HelloWord'
function App() {

  const url = 'https://via.placeholder.com/150'
  return (
    <>
      <h1>Olá, mundo!</h1>
      <HelloWord />
      <img src={url} alt="" />
      <SayMyName nome = "jorge"/>
      <SayMyName nome = "luiz"/>



    </>
  )
}

export default App
