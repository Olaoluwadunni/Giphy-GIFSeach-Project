import { Paper, Divider, Typography,Button  } from '@mui/material'
import Cookies from 'js-cookie'
import {IoCaretBackOutline} from "react-icons/io5"
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const GifInformation = () => {
    const gifDetails = Cookies.getJSON("gif")
    
    console.log('Ewo:' , gifDetails)
    return (
        <div>
            <div className='container mt-5'>
                <Link to='/' className='text-decoration-none'>
                    <Button variant="contained" className='text-capitalize bg-danger' disableElevation><IoCaretBackOutline/> back</Button>
                </Link>
            </div>
            <Typography variant='h4' className='text-center mt-4 mb-3'> GIF Information</Typography>
            <div className='d-flex justify-content-center align-content-center'>
                <img 
                    src={gifDetails.item.imageUrl}
                    alt= 'gif Images'
                    width="450em"
                    height="400em"
                    />
                <Paper elevation={0} className='border ms-4 px-3 py-4'>
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
                    <p><span className='fw-bold mb-0'>Url:</span><a href= {gifDetails.item.url} rel='noreferrer' className='text-decoration-none' target='_blank'>Link<BsArrowRight/></a></p>
                </Paper>
            </div>
        </div>
    )
}

export default GifInformation
