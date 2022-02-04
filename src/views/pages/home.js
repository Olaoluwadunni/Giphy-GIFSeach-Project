import React, {useState} from 'react';
import getGIF from '../../services/getGIF';
import { Link } from "react-router-dom"
import Cookie from 'js-cookie'
import { ReactComponent as Loader } from '../../assets/images/Spinner-1s-200px.svg';

const Home = () => {
    const [searchInput, setSearchInput] = useState('')
    const [gif, setGif] = useState([])
    const [isLoading, setIsLoading] = useState(false )
    const handleSubmit = async(e) => {
        setIsLoading(true)
        e.preventDefault()
        getGIF(searchInput)
        .then((response) => setGif(response?.data))
        .catch((err) => console.log(JSON.stringify(err))) 
        .finally(() => setIsLoading(false) ) 
    }
    const gifInfo= gif?.data
    console.log(gifInfo)

    const handleClick = async(item) => {
        
        const newItem = [item]
        console.log(item.url)

        Cookie.set('gif', {item : {
            type: item.type,
            id: item.id,
            imageUrl: item.images.downsized.url,
            title: item.title,
            importDate: item.import_datetime,
            userName: item.username,
            rating: item.rating,
            url: item.url
        }})
        localStorage.setItem('gif', JSON.stringify(newItem))
        console.log(item.type, '---item')
    }
    return (
        <div className="App mt-4">
            <div className='d-flex justify-content-center align-center mx-auto'>
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
                    console.log({images})
                return (
                    isLoading ? (
                        <Loader/>
                    ) : (
                    <Link to={`/gif-information/${item.id}`} key={index}>
                        <img 
                            width="300em"
                            height="250em"
                            src={images.downsized.url} 
                            alt={images.downsized.url}
                            className='me-4 mt-4 img-card'
                            onClick={() => handleClick(item)}
                        />
                    </Link>
                    )
                )
            })
            : 'Nothing to display here. Please search for something'}
        </div>
    );
}

export default Home


