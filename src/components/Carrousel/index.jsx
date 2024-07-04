import { useState } from 'react'
import backImg from '../../images/backImg.png'
import nextImg from '../../images/nextImg.png'

const NEXT_Y = 0
const NEXT_X = 1
const BACK_Y = 2
const BACK_X = 3

function Carroussel({pictures}){
    const [idxphoto, setidxphoto] = useState(0)
    const [transition, Settransition] = useState(null)
    const cur_photo=idxphoto
    const nbPhtoto=pictures.length
    const idxMax=nbPhtoto-1

    const decIndex = (nb) => {
        const val=(idxphoto>0)? idxphoto-1 : idxMax
        setidxphoto(val)
        Settransition((transition===BACK_X)?BACK_Y:BACK_X)
    }

    const incIndex = () =>{
        const val=(idxphoto < idxMax)? idxphoto+1 : 0
        setidxphoto(val)
        Settransition((transition===NEXT_X)?NEXT_Y:NEXT_X)
        
    }
    const picture=pictures[idxphoto]
    let Class=""

    switch (transition){
        case NEXT_X :
            Class=<img className='carrousel__nextlrtb' src={`${picture}`} alt="logement"/>
            break;
        case NEXT_Y :
            Class=<img className='carrousel__nextlrbt' src={`${picture}`}  alt="logement"/>
            break;
        case BACK_X :
            Class=<img className='carrousel__backrltb' src={`${picture}`}  alt="logement"/>
            break;
        case BACK_Y : 
            Class=<img className='carrousel__backrlbt' src={`${picture}`}  alt="logement"/>
            break;        
        default:
            Class=<img className='carrousel__img' src={`${picture}`} alt="logement"/>
            break;
    }


    return(
        
        <div className="carrousel">
            <div className="carrousel__div">
                {(nbPhtoto > 1)?<div className='carrousel__lnkback' onClick={decIndex}><img src={backImg} alt='précédente' /></div>:null}
                {(nbPhtoto > 1)?<div className='carrousel__lnknext' onClick={incIndex}><img src={nextImg} alt='suivante' /></div>:null}
                <p className='carrousel__nbImg'>{(nbPhtoto>1)?`${cur_photo+1}/${nbPhtoto}`:null}</p>
            </div>
            {Class}
            
        </div>
    )
}



export default Carroussel