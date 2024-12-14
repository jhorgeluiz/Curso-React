function Evento() {
    
    function meuevento() {
        console.log("Opa, fui ativado")
    }

    return (
        <>
        <p>Clique para disparar um evento</p>
        <button onClick={meuevento}>Ativar</button>
        </>
    )
}

export default Evento