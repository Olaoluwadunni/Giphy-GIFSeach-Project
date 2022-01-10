import {useState} from 'react';
import './App.css';
import getGIF from './services/getGIF';


function App() {
  const [searchInput, setSearchInput] = useState()
  const [gif, setGif] = useState([])
  const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(searchInput)
    getGIF(searchInput)
    .then((response) => setGif(response?.data))
    .catch((err) => console.log(JSON.stringify(err))); 
  }
  if (gif.length = 0) {
    return (
      <div>
        This is it
      </div>
    )
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
      {gif.data ? gif?.data?.map((each) => 
      {
        const {images} = each
      return (
        <>
          <img 
            width="300em"
            height="250em"
            src={images.downsized.url} 
            alt={images.downsized.url}
            className='me-4 mt-4'
          />
        </>
        )
      })
    : 'Nothing to display here. Please search for something'}
    </div>
  );
}

export default App;
