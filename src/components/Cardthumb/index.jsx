import PropTypes from 'prop-types'
import { Link } from "react-router-dom"



function Cardthumb({id, titre, img}){
    const lien=`/Card/${id}`
    return(
        <Link to={lien} >
        <div className="cardthumb">
            
            <img src={img} alt={titre}/>
            <div className='cardthumb__bg-degrad'> 
            <h2>{titre}</h2>
            </div>
        </div> 
        </Link>   
    )
}

Cardthumb.propTypes={
    id:PropTypes.string.isRequired,
    titre:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
}


export default Cardthumb