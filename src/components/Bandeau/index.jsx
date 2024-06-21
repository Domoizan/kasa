function Bandeau({img}){

    const def_class=(img===2)?"body-content__bandeau body-content__bandeau-bis" : "body-content__bandeau"
    const def_texte=(img===1)?"Chez vous, partout et ailleurs":null

    return(
        <div className={def_class}>
            <div>
                <h1>{def_texte}</h1>
            </div>
        </div>
    )
}

export default Bandeau