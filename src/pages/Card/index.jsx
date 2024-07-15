import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Logt from "../../components/Logt"
import { useParams } from 'react-router-dom'
import data from "../../data/logements.json"
import Error from "../../components/Error"


function Card(){
    const {logementid}= useParams()
    const infoLogt = data.find((logt)=> logt.id === logementid)

    const content = (infoLogt===undefined)?<Error /> : <Logt />;

    return (
        <>
        <Header />
        {content}
        <Footer />
        </>
    )
}

export default Card