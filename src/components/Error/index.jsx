import { Link } from "react-router-dom"
import ImgError from '../../images/404.png'

function Error(){
return(
    <div className="error">
        <img src={ImgError} alt='Erreur'/>  
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link  to="/" className="error__lnk">Retourner sur la page d’accueil</Link>
    </div>
)
}

export default Error