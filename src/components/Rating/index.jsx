import PropTypes from 'prop-types'
import starRed from '../../images/starRed.svg'
import starGrey from '../../images/starGrey.svg'

function Rating({rating}){
    
    let content=[]
    for(let idx=0;idx<5;idx++){
        if(idx <= parseInt(rating)){
            content.push(
                <img src={starRed} alt='' key={`star${idx}`}/>
            )
        }else{
            content.push(
            <img src={starGrey} alt ='' key={`star${idx}`}/>
            ) 
        }
    }
    
    return (
        <div className='rating'>
        {content}
        </div>
    )
}

Rating.propTypes={
    rating:PropTypes.string.isRequired,
}



export default Rating