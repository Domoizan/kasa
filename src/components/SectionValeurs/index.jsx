import BoxArticle from '../BoxArticle'
import valeurs from '../../data/valeurs'


function SectionValeurs(){

    const lst_valeurs= valeurs.map( (valeur)=>
        <BoxArticle titre={valeur.titre} texte={valeur.texte}/>)
    
return(
    <section className="sectvaleur">
        {lst_valeurs}
    </section>
)

}

export default SectionValeurs 