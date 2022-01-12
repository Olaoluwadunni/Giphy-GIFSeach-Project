import {useState} from 'react';
import getGIF from '../services/getGIF';
import { Link } from "react-router-dom"
import Cookies from 'js-cookie'

const Home = () => {
    const [searchInput, setSearchInput] = useState()
    const [gif, setGif] = useState([])
    const handleSubmit = async(e) => {
        e.preventDefault()
        getGIF(searchInput)
        .then((response) => setGif(response?.data))
        .catch((err) => console.log(JSON.stringify(err))); 
        // const gifInfo = gif.data
        // console.log(gifInfo)
    }
    const gifInfo= gif.data
    console.log(gifInfo)

    const handleClick = async(item) => {
        console.log(item.slug)
    }
    // const handle = () => { 
    //     Cookies.set('gifInfo', gifInfo)
    // };
    return (
        <div className="App mt-4">
        <div className='d-flex justify-content-center align-center mx-auto'>
        {/* {searchInput} */}
            <form onSubmit={handleSubmit} className='d-flex w-50'>
            <input 
                className="form-control me-2" 
                list="datalistOptions" 
                id="exampleDataList" 
                placeholder="Type to search..."
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <input 
                className="btn btn-primary" 
                type="submit" 
                value="Search"
            />
            </form>
        </div>
        <hr />
        GIF:
        <br />
        {/* {JSON.stringify(gif)} */}
        {gif.data ? gif.data.map((item) => 
        {
            const {images} = item
        return (
            <img 
                width="300em"
                height="250em"
                src={images.downsized.url} 
                alt={images.downsized.url}
                className='me-4 mt-4'
                onClick={() => handleClick(item)}
            />
            )
        })
        : 'Nothing to display here. Please search for something'}
        </div>
    );
}

export default Home


