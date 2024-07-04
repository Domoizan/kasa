import PropTypes from 'prop-types'
import { useState } from 'react'


function BoxArticle({ titre, texte,Class='boxArticle'}){

    const [isOpen, setToggel] = useState(false)
    const toggle=()=>{
        setToggel(!isOpen)
    }

    const icone = isOpen?<div onClick={toggle} className={`${Class}__header__icone ${Class}__header__open`}/>:
        <div onClick={toggle} className={`${Class}__header__icone ${Class}__header__close`}/>


    return (
    <article  className={Class}>
        <header className={`${Class}__header`}>
            <h2>{titre}</h2>
            {icone}
        </header >  
        <div  className= {isOpen?`${Class}__content`:`${Class}__content__hidden`}>
            {texte}
        </div>
    </article>
    )
   
}

BoxArticle.propTypes={
    titre:PropTypes.string.isRequired,
    texte:PropTypes.array.isRequired,
    Class:PropTypes.string,
}



export default BoxArticle