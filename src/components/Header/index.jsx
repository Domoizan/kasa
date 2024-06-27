import logo from "../../images/LOGO.svg"
import Nav from "../Nav"



function Header({mode}){
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <Nav mode={mode}/>
        </div>
    )
}{}

export default Header