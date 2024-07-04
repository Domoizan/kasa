import PropTypes from 'prop-types'

function Tags({tags}){
const content=[]

tags.map((tag)=>
    content.push(
        <div className="tags__item" key={tag}>{tag}</div>
    )
)

return (
    <div className="tags">
        {content}
    </div>
)
}

Tags.propTypes={
    tags : PropTypes.arrayOf(PropTypes.string)
}

export default Tags