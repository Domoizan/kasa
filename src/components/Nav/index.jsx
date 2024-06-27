import { Link } from "react-router-dom"




function Nav({mode}){
    console.log(`mode = ${mode}`)
    return (
        
        <div className="header__nav">
        <Link to="/" className={(mode===1)?'header__nav__lnkActif':'header__nav__lnk'} >Accueil</Link>
        <Link to="/Apropos" className={(mode===2)?'header__nav__lnkActif':'header__nav__lnk'}>A propos</Link>
        </div>
    )
}

export default Nav