import React from 'react'
import {data}  from '../data/data';

const RightSide = () => {
  return (
    <>
    <div style={{width:'80%'}} className='mb-4 d-flex justify-content-between align-items-center'> <h3>Recent posts</h3><div className="redline"></div></div>
        <div className="post-1 d-flex justify-content-between">
            <img className='me-4' width='85px' height='75px' src={data[0].img} alt="" />
            <p>
                <h5>{data[0].title}</h5>
                {data[0].date}
            </p>
        </div>
        <div className="post-1 d-flex justify-content-between">
            <img className='me-4' width='115px' height='75px' src={data[1].img} alt="" />
            <p>
                <h5>{data[1].title}</h5>
                {data[1].date}
            </p>
        </div>
        <div className="post-1 d-flex justify-content-between">
            <img className='me-4' width='85px' height='75px' src={data[2].img} alt="" />
            <p>
                <h5>{data[2].title}</h5>
                {data[2].date}
            </p>
        </div>
        <div className="post-1 d-flex justify-content-between">
            <img className='me-4' width='85px' height='75px' src={data[3].img} alt="" />
            <p>
                <h5>{data[3].title}</h5>
                {data[3].date}
            </p>
        </div>

        <div style={{width:'80%'}} className='mb-4 mt-5 d-flex justify-content-between align-items-center'> <h3>Tag Cloud</h3><div className="redline"></div></div>
        <div className="tags">
            <div><span style={{color:'#FAC567'}}>#</span>Health</div>
            <div><span style={{color:'#4FE0D6'}}>#</span>Lifestyle</div>
            <div><span style={{color:'#FF5373'}}>#</span>Music</div>
            <div><span style={{color:'#5096FF'}}>#</span>Technology</div>
            <div><span style={{color:'#8282E5'}}>#</span>Travel</div>
            <div><span style={{color:'#FD78C8'}}>#</span>Video</div>
        </div>

        <div style={{width:'80%'}} className='mb-4 mt-5 d-flex justify-content-between align-items-center'> <h3>Social</h3><div className="redline"></div></div>
        <div className="soc-logos  d-flex justify-content-evenly align-items-center ">
            <div className='logo tw'><i class="fa-brands fa-twitter fa-2x"></i></div>
            <div className='logo fb'><i class="fa-brands fa-facebook-f fa-2x"></i></div>
            <div className='logo ins'><i class="fa-brands fa-instagram fa-2x"></i></div>
            <div className='logo wf'><i class="fa-solid fa-wifi fa-2x"></i></div>
        </div>

        <div style={{width:'80%'}} className='mb-4 mt-5 d-flex justify-content-between align-items-center'> <h3>Advertising</h3><div className="redline"></div></div>
        <div className="adv d-flex  justify-content-center align-items-center ">
            <div>
            <h3 className='adv-txt text-center'>Advertising</h3>
            <h3 className='adv-txt text-center'>Area</h3>
            </div>
        </div>

    </>
  )
}

export default RightSide