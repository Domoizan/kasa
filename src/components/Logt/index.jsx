import { useParams } from 'react-router-dom'
import data from '../../data/data'
import Carroussel from '../Carrousel'
import Logtinfo from '../logtInfo'
import EquipLogt from '../EquipLogt'
import DescLogt from '../DescLogt'
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
    

    return (
        
        <div className="logt">
            <Carroussel pictures={infoLogt.pictures}/>
            <Logtinfo infoLogt={infoLogt}/>
            <div className="detail">
                <DescLogt description={infoLogt.description}/>
                <EquipLogt equipements={infoLogt.equipments}/>
            </div>
            <div className="detail">
                <BoxArticle titre = 'Description' texte={infoLogt.description}/>
                <BoxArticle titre = 'Équipements' texte={content}/>
            </div>
        </div>
    )
}
export default Logt