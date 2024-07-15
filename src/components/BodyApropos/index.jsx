import Bandeau from "../Bandeau"
import SectionValeurs from "../SectionValeurs"

function BodyApropos(){
    return (
        <div className="body-content">
            <Bandeau img={2}/>
            <SectionValeurs/>
        </div>
    )
}


export default BodyApropos