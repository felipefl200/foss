function Jacadastrado() {
    return (
        <div className="bg-foss-100 rounded-md ">
            <div className='border-2 rounded-md border-green-600 m-2 p-2'>
                <p className='text-white text-2xl'>
                    Cadastro efetuado com sucesso!
                </p>
                <span className='text-gray-100 text-sm leading-tight'>Não se preocupe em breve você receberá mais informações sobre o evento.</span>
                <div className='text-gray-100 text-sm leading-tight mt-4'>Caso deseje saber mais sobre seu cadastro, por favor entre em contato com um dos administradores.</div>
                <ul className='list-disc list-inside mt-4 text-sm text-white space-y-1'>
                    <li><a className='hover:text-green-400' href="mailto:teste@teste.com.br">teste@teste.com.br</a></li>
                    <li><a className='hover:text-blue-400' href="https://t.me/flisolpoars">Grupo de Telegram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Jacadastrado