import  {apiKey, baseUrl} from '../../helpers/variables'
import {useState} from 'react';
import { useParams } from "react-router"

const gifInformation = () => {
    const [gifInfo, setGifInfo] = useState()
    const handleClick = async(e) => {
    e.preventDefault()
  }
    return (
        <div>
            This is it!!!!
        </div>
    )
}

export default gifInformation
