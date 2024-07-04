
import BoxArticle from '../BoxArticle'
import valeurs from '../../data/valeurs'



function SectionValeurs(){
    let cle=Date.now()
    const lst_valeurs= valeurs.map( (valeur)=>
        <BoxArticle key={`${valeur.titre}-${cle++}`} titre={valeur.titre} texte={[valeur.texte]}/>)
    
return(
    <section className="sectvaleur">
        {lst_valeurs}
    </section>
)

}

export default SectionValeurs 