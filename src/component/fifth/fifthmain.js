import React from 'react';
import './fifthmain.css';
import Fifth23 from './fifthsub/fifth2&3';
import Fifth45 from './fifthsub/fifth45';

export default function fifthmain() {
  return (
    <div className='fifth-main-container'>
        <div className='fifth-one-container'>
        <h1 className='Rugged'>Rugged Tablet</h1>
        <p className='Rugged-para'>Professional Design & Manufacture Service.</p>
        </div>
        <div className='fifth-two-container'>
            <Fifth23 />
        </div>
        <div className='fifth-three-container'>
            <Fifth45 />
        </div>
    </div>
  )
}
