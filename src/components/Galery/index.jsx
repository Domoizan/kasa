import Cardthumb from "../Cardthumb"
import data from '../../data/data.js'


const thumbs = data.map((lgt)=>
    <Cardthumb key={lgt.id} id={lgt.id} titre={lgt.title} img={lgt.cover}/>)

function Galery(){
    return (
    <div className="body-content__galery">
        {
        thumbs
        }
    </div>
)

}

export default Galery