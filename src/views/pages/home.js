import {useState} from 'react';
import getGIF from '../../services/getGIF';
import { Link } from "react-router-dom"
import Cookie from 'js-cookie'
// import { type } from '@testing-library/user-event/dist/type';

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
    const gifInfo= gif?.data
    console.log(gifInfo)

    const handleClick = async(item) => {
        
        const newItem = [item]

        Cookie.set('gif', {item : {
            type: item.type,
            id: item.id,
            imageUrl: item.images.downsized.url,
            title: item.title,
            importDate: item.import_datetime,
            userName: item.username,
            rating: item.rating
        }})
        localStorage.setItem('gif', JSON.stringify(newItem))
        console.log(item.type, '---item')
    }
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
        {gif.data ? gif.data.map((item, index) => 
        {
            const {images} = item
            
        return (
            <Link to={`/gif-information/${item.id}`} key={index}>
                <img 
                    width="300em"
                    height="250em"
                    src={images.downsized.url} 
                    alt={images.downsized.url}
                    className='me-4 mt-4'
                    onClick={() => handleClick(item)}
                />
            </Link>
            )
        })
        : 'Nothing to display here. Please search for something'}
        </div>
    );
}

export default Home


