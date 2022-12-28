import React from 'react';
import data from './imagedata';
import './sliderf.css';

export default function sliderf(props) {
    const slide = data.map((d,index) => {
        return <div key ={index} 
        className={index === props.slideIndex ? "myslides fade" : "myslidesnone"}>
            <img className='image' src ={d.src} alt ={d.caption } />
        </div>
    })
  return slide
}
