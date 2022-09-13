import React, { useEffect, useState } from 'react';
import Blog from './components/Blog';
import './sass/index.css'
import {data}  from './data/data';
import RightSide from './components/RightSide';
import Footer from './components/Footer';
import ModeBtn from './mode/ModeBtn';
import './langConfig/i18next'
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  const handleClick=(lang)=>{
    i18n.changeLanguage(lang);
  }
  const[mode,Setmode]=useState('light');
  // const[modeTwo,SetmodeTwo]=useState('navbar navbar-light bg-light');
  const switchh=()=>{
      Setmode(mode==='light'?'dark':'light')
      // SetmodeTwo(modeTwo==='navbar navbar-dark bg-dark'?'navbar navbar-light bg-light':'navbar navbar-dark bg-dark')
      document.querySelector('.sec-navb').classList.toggle('greyback')
      document.querySelector('.footer').classList.toggle('greyback')
      document.querySelectorAll('.blog').forEach((el)=>{
        el.classList.toggle('greyback')
      })
      document.querySelectorAll('.blog-text').forEach((el)=>{
        el.classList.toggle('w-font')
      })
      
      document.querySelectorAll('.sec-navb a').forEach((el)=>{
        el.classList.toggle('w-font')
      })
   
  }
  useEffect(()=>{
    document.body.className=mode;
    // document.querySelector('nav').className=modeTwo
  })
  return (
    <div>

        <nav className='navbar navbar-dark bg-dark'>
            <div className="container-fluid">
            <img width='152px' height='18px' src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg" alt="" />
           <div className='d-flex justify-content-between'>
           <button className='btn btn-success me-3'>{t('buynow.0')}</button>
            <ModeBtn switchColor={switchh} modename={mode} />
            <div>
              <button className='mt-2 mx-1 btn btn-primary' onClick={()=>{handleClick('az')}}>az</button>
              <button className='mt-2 btn btn-primary' onClick={()=>{handleClick('en')}}>en</button>
            </div>
           </div>
            </div>
        </nav>

   <div className="container">
        <div className="maktub-logos d-flex justify-content-between mt-5">
            <div style={{width:'180px'}} className="logos d-flex justify-content-between">
            <div className='logo tw'><i class="fa-brands fa-twitter fa-2x "></i></div>
            <div className='logo fb'><i class="fa-brands fa-facebook-f fa-2x"></i></div>
            <div className='logo ins'><i class="fa-brands fa-instagram fa-2x"></i></div>
            <div className='logo wf'><i class="fa-solid fa-wifi fa-2x"></i></div>
            </div>
            <div className="maktub-w"><h1><span>M</span><span>aktub</span></h1></div>
            <div className="src-b"><button className='btn btn-success'><i class="fa-solid fa-magnifying-glass"></i></button></div>

           
        </div>


        <div className='snav-con d-flex justify-content-center align-items-center'>
                <div className="sec-navb d-flex justify-content-center align-items-center">
                    <ul className='d-flex justify-content-between align-items-center'>
                        <li><a href="">{t('m.0')}</a></li>
                        <li><a href="">{t('m.1')}</a></li>
                        <li><a href="">{t('m.2')}</a></li>
                        <li><a href="">{t('m.3')}</a></li>
                        <li><a href="">{t('m.4')}</a></li>
                        <li><a href="">{t('m.5')}</a></li>
                        <li><a href="">{t('m.6')}</a></li>
                    </ul>
                </div>
            </div>

     
     <div className="sides">
     <div className='left-side'>
      {data.map((fd)=>{
        return  <Blog basliq={fd.title} sekil={fd.img} metn={fd.text} tarix={fd.date} muellif={fd.author} muellifpic={fd.author_pic} />
       })}
      </div>

      <div className="right-side">
       <RightSide/>
      </div>
     </div>
       
        </div>
       <Footer/>
    </div>
  )
}

export default App