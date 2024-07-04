import { useParams } from 'react-router-dom'
import data from '../../data/data'
import Carroussel from '../Carrousel'
import Logtinfo from '../logtInfo'
import BoxArticle from '../BoxArticle'


function Logt(){
    const {logementid}= useParams()
    const infoLogt = data.find((logt)=> logt.id === logementid)
    const content=[]
    const equipements=infoLogt.equipments
    equipements.map((item) =>
        content.push(
            <p key={item}>{item}</p>
        )
    )

   const description=[infoLogt.description] 
    

    return (
        
        <div className="logt">
            <Carroussel pictures={infoLogt.pictures}/>
            <Logtinfo infoLogt={infoLogt}/>

            <div className="details">
                <BoxArticle titre = 'Description' texte={description} Class="detail" />
                <BoxArticle titre = 'Équipements' texte={content} Class="detail"/>
            </div>
        </div>
    )
}
export default Logt