import Galery from '../Galery'
import Bandeau from '../Bandeau'
function Body(){
    return(
        <div className="body-content">
            <Bandeau img={1}/>
            <Galery />
        </div>
    )
}

export default Body