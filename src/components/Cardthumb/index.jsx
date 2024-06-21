
import { Link } from "react-router-dom"



function Cardthumb({id, titre, img}){
    const lien=`/Card/${id}`
    return(
        <Link to={lien} >
        <div className="cardthumb">
            <img src={img} alt={titre}/>
            <h2>{titre}</h2>
        </div> 
        </Link>   
    )
}

export default Cardthumb