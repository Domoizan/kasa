import { useState } from 'react'
import defaultImg from '../../images/Deplier.png'


function EquipLogt({equipements}){
    const [deploie, setDeploie] = useState(false)
    const val=deploie
    const valclass=val?'equipement__content':'equipement__content hidden'

    const content=[]
    equipements.map((item) => 
        content.push(
            <p key={item}>{item}</p>
        )
    )

    return(

        <div className="equipement">
            <div className="equipement__titre">
            Équipements
            <img src={defaultImg} alt="déplier" onClick={()=>setDeploie(!val)}/>
            </div>
            <div className={valclass}>
                    {content}
            </div>
        </div>
    )
}

export default EquipLogt