import { useState } from 'react'
import fleche_open from '../../images/arrow_open.png'
import fleche_close from '../../images/arrow_close.png'


function BoxArticle({ titre, texte}){

    const [isOpen, setToggel] = useState(false)
    const toggle=()=>{
        setToggel(!isOpen)
    }

    const icone = isOpen?<div onClick={toggle} className='boxArticle__header__icone boxArticle__header__open'/>:
        <div onClick={toggle} className='boxArticle__header__icone boxArticle__header__close'/>

    /*
    const icone = isOpen?<img src={fleche_open} alt="" onClick={toggle} className='boxArticle__header__open'/>:
                        <img src={fleche_close} alt="" onClick={toggle} className='boxArticle__header__close'/>
    
   */
    

    return (
    <article  className='boxArticle'>
        <header className='boxArticle__header'>
            <h2>{titre}</h2>
            {icone}
        </header >  
        <div  className= {isOpen?'boxArticle__content':'boxArticle__content__hidden'}>
            {texte}
        </div>
    </article>
    )
   
}
export default BoxArticle