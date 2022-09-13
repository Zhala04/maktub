import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer">
       <div className="footer-con">
       <div className="subscribe"><h2 className='text-center'>Subscribe to <span>M</span><span>aktub</span></h2></div>
       <p className='text-center p' style={{color:'#5A6273'}}>Get the latest posts delivered right to your email.</p>
       <div className='inp-div'><input type="text" placeholder='Enter your email address' /><button className='f-submit'>Submit</button></div>
       

       </div>
    </div>
    </>
  )
}

export default Footer