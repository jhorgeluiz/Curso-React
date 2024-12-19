function Condicional() {

    function enviarEmail(e) {
        e.preventDefault()
        console.log('testando')
    }
    return (
        <>

            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="digite o seu e-mail" />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            </form>

        </>
    )
}

export default Condicional