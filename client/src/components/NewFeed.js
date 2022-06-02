import React from 'react'
import { Link } from 'react-router-dom'

export default function NewFeed({
    imageFile,
    description,
    title,
    _id,

  }) {
    return (
        <><Link to={`/tour/${_id}`} className='d-flex align-items-center text-black mb-2'>
            <div className='p-1'>
                <img src='https://mdbootstrap.com/img/new/standard/city/047.webp' height='50px' width="100px" className='img-fluid rounded' alt='' />
            </div>
            <div className=' d-flex flex-column align-items-start ms-1'>
                <h5 className=''>
                    Title
                </h5>
                <span>
                    lorem ipsum d lorem port sd
                </span>
            </div>
        </Link></>
    )
}
