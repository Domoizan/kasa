import defaultPicture from '../../images/Host.svg'

function HostCard({host}){
const name=host.name.split(' ')

const img=host.picture?host.picture:defaultPicture
return(
    <div className="host">
        <div className="host__ident">
        <p>{name[0]}</p>
        <p>{name[1]}</p>
        </div>
        <div>
        <img src={img} alt="" />
        </div>
    </div>
)

}

export default HostCard