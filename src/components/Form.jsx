function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('cadastrou o usuario')
    }
    return (
        <>
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}

export default Form