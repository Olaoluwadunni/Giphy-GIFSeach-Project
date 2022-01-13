// import ReactDom from "react-dom";
// import {
//     useParams
// } from "react-router-dom"
import Cookies from 'js-cookie'

const GifInformation = () => {
    const gifDetails = Cookies.getJSON("gif")
    
    console.log('Ewo:' , gifDetails)
    // let params = useParams()
    return (
        <div>
            {/* {typeof gifDetails} */}

            Slug: {gifDetails.item.type}
        </div>
    )
}

export default GifInformation
