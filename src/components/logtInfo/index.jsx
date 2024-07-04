import PropTypes from 'prop-types'
import Rating from '../Rating'
import HostCard from '../HostCard'
import Tags from '../Tags'

function Logtinfo({infoLogt}){

return (
    <div className="location">
        <div>
            <div>
                <h1>{infoLogt.title}</h1>
                <h2>{infoLogt.location}</h2>
            </div>
            <Tags tags={infoLogt.tags} />
        </div>
        <div className='location__host'>
            <HostCard host={infoLogt.host}/>
            <Rating rating={infoLogt.rating}/>
        </div>
    </div>
)
}


Logtinfo.propTypes = {
    infoLogt:PropTypes.object.isRequired,
}


export default Logtinfo