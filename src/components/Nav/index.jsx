import {  NavLink } from "react-router-dom"


function Nav(){
    return (
        
        <div className="header__nav">
            <NavLink to="/" className={({isActive}) => isActive ? "header__nav__lnkActif" : "header__nav__lnk"} >Accueil</NavLink>
            <NavLink to="/Apropos" className={({isActive}) => isActive ? "header__nav__lnkActif" : "header__nav__lnk"}>A propos</NavLink>
        </div>
    )
}

export default Nav