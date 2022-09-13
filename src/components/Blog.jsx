import React from 'react';
import '../sass/index.css'
// import { data } from '../data/data';

const Blog = ({sekil,basliq,tarix,metn,muellif,muellifpic}) => {
  return (
    <div className="blog mb-5">
    <div className="blog-1 d-flex justify-content-between ">
        <img style={{cursor:'pointer'}} width='154px' height='134px' src={sekil} alt="" />
        <p className='ms-4'>
            <h1 style={{color:'#454360'}}>{basliq}</h1>
            {tarix}
        </p>
    </div>
    <p className='mt-5 blog-text' style={{color:'#596172'}}>
   {metn}
    </p>
    <div className="author d-flex justify-content-end">
        <div className='me-2'><img src={muellifpic} alt="" /></div>
    <p className='pt-2' style={{color:'#596172'}}>{muellif}</p>
    </div>
</div>
  )
}

export default Blog