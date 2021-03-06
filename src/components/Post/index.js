import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'

export function Post () {
    return(
        <>
            <header className='header-post'>

                <div className='infos-post'>

                    <img className='img-header-post' src='https://github.com/evanilsonpg.png' alt='image' />

                    <p>dev.nilson</p>

                </div>

                <div class="FiMore">
                    <FiMoreHorizontal />
                </div>

            </header> 

            <div className='img-post'>

                <img src='https://github.com/evanilsonpg.png' alt='img-post' />

            </div>

            <div className='footer-post'>

                <section className='engagements-post'>

                    <div className='icons-1'>

                        <div className='icon'>
                            <IoMdHeartEmpty size={23} />
                        </div>

                        <div className='icon'>
                            <BsChat size={20} />
                        </div>

                        <div className='icon'>
                            <FiSend size={20} />
                        </div>

                    </div>

                    <div className='icon'>
                        <BsBookmark size={20} />
                    </div> 

                </section>

                <section className='like'>

                    <span>60 Curtidas</span>

                </section>

                <div className='legend'>
                     
                     <p>
                         <span>dev.nilson</span> Olá esse é meu site! um clone do instagram com novas funcionalidades.
                     </p>

                </div>

                <div className='time-post'>

                    <time>HÁ 1 HORA!</time>
                    
                </div>

                <div className='comment'>

                    <div className='fake-comment'>

                        <div className="icon">
                            <BsEmojiSmile size={20} />
                        </div>

                        <input placeholder='Adicione um comentário ...' />
                        
                    </div>

                    <button>Publicar</button>

                </div> 

            </div>

        </>
    )
}