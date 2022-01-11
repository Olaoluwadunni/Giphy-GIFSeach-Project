import { apiKey, baseUrl } from "../helpers/variables"
import axios from 'axios'

const getGIF = async(category) => {
    const url = `${baseUrl}?api_key=${apiKey}&q=${category}&limit=25&offset=0&rating=g&lang=en`;
        return  axios.get(url)
        }

export default getGIF
