import { Link } from "react-router-dom"


function Error(){
return(
    <div className="error">
        <p className="error__num">404</p> 
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <Link  to="/" className="error__lnk">Retourner sur la page d’accueil</Link>
    </div>
)
}

export default Error