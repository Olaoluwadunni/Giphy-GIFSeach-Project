import { apiKey, baseUrl } from "../helpers/variables"
import axios from 'axios'

const getGifInformation = async(id) => {
    const url = `https://api.giphy.com/v1/gifs/api_key=${apiKey}&q=${category}&limit=25&offset=0&rating=g&lang=en`;
        return  axios.get(url)
        }

export default getGifInformation
