import { Paper, Divider, Typography } from '@mui/material'
import Cookies from 'js-cookie'

const GifInformation = () => {
    const gifDetails = Cookies.getJSON("gif")
    
    console.log('Ewo:' , gifDetails)
    return (
        <div>
            <Typography variant='h4' className='text-center mt-4 mb-2'> GIF Information</Typography>
            <div className='d-flex justify-content-center align-content-center'>
                <img 
                    src={gifDetails.item.imageUrl}
                    alt= 'gif Images'
                    width="450em"
                    height="400em"
                    />
                <Paper elevation={0} className='border ms-4 px-3 py-5'>
                    <p className=''><span className='fw-bold mt-2'>Username:</span> {gifDetails.item.userName}</p>
                    <Divider/>
                    <p className=''><span className='fw-bold mb-0'>Title:</span> {gifDetails.item.title}</p>
                    <Divider/>
                    <p className=''><span className='fw-bold mb-0'>Import Date:</span> {gifDetails.item.importDate}</p>
                    <Divider/>
                    <p className=''><span className='fw-bold mb-0'>Rating:</span> {gifDetails.item.rating}</p>
                    <Divider/>
                    <p className=''><span className='fw-bold mb-0'>Id:</span> {gifDetails.item.id}</p>
                    <Divider/>
                </Paper>
            </div>
        </div>
    )
}

export default GifInformation
