// import  {apiKey, baseUrl} from '../../helpers/variables'
import Cookies from 'js-cookie'

const GifInformation = () => {
    const info = Cookies.get("gifInformation")
    console.log(info)
    return (
        <div>
            This is it!!!!
        </div>
    )
}

export default GifInformation
