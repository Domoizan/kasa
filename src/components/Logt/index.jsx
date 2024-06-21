import { useParams } from 'react-router-dom'
import data from '../../data/data'


function Logt(){
    const {logementid}= useParams()
    const infoLogt = data.find((logt)=> logt.id === logementid)
    
    return (
        
        <div className="logt">
            Logement {logementid} {infoLogt.title}
        </div>
    )
}
export default Logt