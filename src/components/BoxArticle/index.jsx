import fleche from '../../images/arrow_back.svg'

function BoxArticle({titre, texte}){

    return (
    <article className='boxArticle'>
        <header   className='boxArticle__header'>
            <h2 >{titre}</h2>
            <img src={fleche} alt="" />
        </header>
        <div className='boxArticle__content'>
            {texte}
        </div>
    </article>
    )
   
}
export default BoxArticle