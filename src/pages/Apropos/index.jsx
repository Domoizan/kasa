import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BodyApropos from "../../components/BodyApropos"

function Apropos({mode=2}){
    console.log(`mode = ${mode}`)
    return (
        <div>
            <Header mode={mode}/>
            <BodyApropos />
            <Footer />
        </div>
    )
}

export default Apropos