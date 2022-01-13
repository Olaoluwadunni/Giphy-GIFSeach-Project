// import  {apiKey, baseUrl} from '../../helpers/variables'
import Cookies from 'js-cookie'
import { routes } from '../../routes'
import  GifInformation  from './gifInformation'
import { Route, Navigate, Router, useMatch } from 'react-router-dom'


const GifInformations = () => {
    const {path} = useMatch()
    const info = Cookies.get("gifInformation")
    console.log(info)

    return (
        <Router>
            <Route exact path={path}>
                <Navigate to={routes.gifInformation} from={path}/>
            </Route>
            <Route path={`${path}`}>
                <GifInformation/>
            </Route> 
        </Router>
    )
}

export default GifInformations
