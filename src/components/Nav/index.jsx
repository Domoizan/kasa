import { Link } from "react-router-dom"


function Nav(){
    return (
        <div className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A propos</Link>
        </div>
    )
}

export default Nav