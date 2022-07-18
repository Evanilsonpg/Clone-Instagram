import './style.css'

export function Suggestion () {
    return (
        <>
        
            <div className='header-suggestion'>

                <img src='https://github.com/evanilsonpg.png' alt='imagem nilson' />

                <div className='user-infos-suggestion'>

                    <div className='infos'>

                        <span>dev.nilson</span>
                        <p>Nilson</p>

                    </div>

                    <button className='switch'>Mudar</button>

                </div>

            </div>

            <div className='header-main-suggestion'>

                    <p>Sugestões para voce</p>

                    <span>Ver tudo</span>

            </div>

        </>
    )
}