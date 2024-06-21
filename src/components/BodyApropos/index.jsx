import Bandeau from "../Bandeau"
import SectionValeurs from "../SectionValeurs"

function BodyApropos({val=2}){
    return (
        <div className="body-content">
            <Bandeau img={val}/>
            <SectionValeurs/>
        </div>
    )
}

export default BodyApropos