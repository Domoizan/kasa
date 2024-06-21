import LOGO from '../../images/LOGO.png'

function Footer(){
    return (
        <div className="footer-content">
            <img src={LOGO} alt='Logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer