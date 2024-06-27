
import defaultImg from '../../images/Deplier.png'
import { useState } from 'react'

function DescLogt({description}){
    
    const [deploie, setDeploie] = useState(false)
    const val=deploie
    const valclass=val?'description__content':'description__content hidden'
    
    return(

        <div className="description">
            <div className="description__titre">
            Description
            <img src={defaultImg} alt="déplier" onClick={()=>setDeploie(!val)}/>
            </div>
            <div className={valclass}>
                    {description}
            </div>
        </div>
    )
}
export default DescLogt