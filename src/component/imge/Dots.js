import React from 'react';
import data from './imagedata';
import './dosts.css'
export default function Dots(props){
    const dots = data.map((_data,index)=>{
        return <span key={index} className={index === props.slideIndex ? "dot active" :"dot"}>

        </span>
    })
    return (
        <div className='dots-container'>
            {dots}
        </div>
    )
}