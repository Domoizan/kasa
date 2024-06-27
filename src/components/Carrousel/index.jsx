import { useState } from 'react'
import backImg from '../../images/backImg.png'
import nextImg from '../../images/nextImg.png'

function Carroussel({pictures}){
    const [idxphoto, setidxphoto] = useState(0)
    //let idxphoto=0
    let depNext=true
    const cur_photo=idxphoto
    const nbPhtoto=pictures.length
    const idxMax=nbPhtoto-1

    const decIndex = (nb) => {
        const val=(idxphoto>0)? idxphoto-1 : idxMax
        setidxphoto(val)
        depNext=false
    }

    const incIndex = () =>{
        const val=(idxphoto < idxMax)? idxphoto+1 : 0
        setidxphoto(val)
        depNext=true
    }
    
    const Class=(depNext)?'carrousel__img carrousel__next':'carrousel__img carrousel__back'

    //const texte_alt=`Photo ${idxphoto+1} du logement`
    //const srcimg=pictures[0]


    return(
        
        <div className="carrousel">
            {(nbPhtoto > 1)?<div className='carrousel__lnkback' onClick={decIndex}><img src={backImg} alt='précédente' /></div>:null}
            {(nbPhtoto > 1)?<div className='carrousel__lnknext' onClick={incIndex}><img src={nextImg} alt='suivante' /></div>:null}
            <p className='carrousel__nbImg'>{(nbPhtoto>1)?`${cur_photo+1}/${nbPhtoto}`:null}</p>
            <img src={pictures[idxphoto]} alt='logement' className={Class}/>
        </div>
    )
}
export default Carroussel