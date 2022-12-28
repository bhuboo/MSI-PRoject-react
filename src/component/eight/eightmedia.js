import React, { useState } from 'react';
import './eightmedia.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';



export default function Eightmedia() {
  const [show,setshow]=useState(false)
  const [show1,setshow1]=useState(false)
  const [show2,setshow2]=useState(false)
  const [show3,setshow3]=useState(false)
  const [show4,setshow4]=useState(false)


  return (
    <div className='media-contaier'>
      <div className='div-community'>
        <button onClick={()=>setshow(!show)} className='media-community'>COMMUNITY{ show?<span className='icon-color'><CloseIcon/></span>:<span className='icon-color'><AddIcon/></span>}</button>
        </div>
       {
        show &&
        <div className='media-community-ul'>
        <ul className='community-media-ul'> 
                <li className='community-media-para'>MSI Reward Program</li>
                <li className='community-media-para'>Forums</li>
                <li className='community-media-para'>Social Media</li>
                <li className='community-media-para'>Videos</li>
                <li className='community-media-para'>Gaming Teams</li>
                <li className='community-media-para'>Blogs</li>
                <li className='community-media-para'>Customer Stories</li>
            </ul>
            </div>
}    
        <div className='div-community'>
        <button onClick={()=>setshow1(!show1)} className='media-community'>SUPPORT{ show1?<span className='icon-color'><CloseIcon/></span>:<span className='icon-color'><AddIcon/></span>}</button>
        {
          show1 &&
        <div className='media-community-ul'>
        <ul className='community-media-ul'> 
                <li className='community-media-para'>Downloads</li>
                <li className='community-media-para'>Member Center</li>
                <li className='community-media-para'>Online Customer Service</li>
                <li className='community-media-para'>Warranty</li>
            </ul>
            </div>
        }
        </div>
        <div className='div-community'>
        <button onClick={()=>setshow2(!show2)} className='media-community'>NEWS{ show2?<span className='icon-color'><CloseIcon/></span>:<span className='icon-color'><AddIcon/></span>}</button>
        {
          show2 &&
        <div className='media-community-ul'>
        <ul className='community-media-ul'> 
                <li className='community-media-para'>Press Room</li>
                <li className='community-media-para'>Awards</li>
                <li className='community-media-para'>RSS</li>
            </ul>
            </div>
        }
        </div>
        <div className='div-community'>
        <button onClick={()=>setshow3(!show3)} className='media-community'>MEDIA{ show3?<span className='icon-color'><CloseIcon/></span>:<span className='icon-color'><AddIcon/></span>}</button>
        {
          show3 &&
        <div className='media-community-ul'>
        <ul className='community-media-ul'> 
                <li className='community-media-para'>Brochure</li>
                <li className='community-media-para'>Wallpaper</li>
                <li className='community-media-para'>MSI Apps</li>
            </ul>
            </div>
       }
        </div>
        <div className='div-community'>
        <button onClick={()=>setshow4(!show4)} className='media-community'>ABOUT US{ show4?<span className='icon-color'><CloseIcon/></span>:<span className='icon-color'><AddIcon/></span>}</button>
       {
        show4 &&
        <div className='media-community-ul'>
        <ul className='community-media-ul'> 
                <li className='community-media-para'>About MSI</li>
                <li className='community-media-para'>Mission And Vision</li>
                <li className='community-media-para'>Brand Story</li>
                <li className='community-media-para'>investor</li>
                <li className='community-media-para'>innovation</li>
                <li className='community-media-para'>CSR</li>
            </ul>
            </div>
       }
        </div>
    </div>
  )
}
