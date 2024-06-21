import logo from "../../images/LOGO.svg"
import Nav from "../Nav"



function Header(){
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <Nav />
        </div>
    )
}

export default Header