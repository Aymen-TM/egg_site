import React from 'react'
import ImagOne from '../images/egg.jpg'
import ImagTwo from '../images/egg-2.jpg'

function Contents() {
  return (
    <div>
    <div className='menu-card' >
        <img src={ImagOne} alt="egg1" className='card-image' />
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl mb-2'>Egg Muffins</h1>
            <p className='mb-2'>crispy,delicious, and nutritious</p>
            <span>12$</span>
        </div>
    </div>
    <div className='menu-card' >
        <img src={ImagTwo} alt="egg2" className='card-image' />
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl mb-2'>Egg Salad</h1>
            <p className='mb-2'>crispy,delicious, and nutritious</p>
            <span>6$</span>
        </div>
    </div>
    </div>
  )
}

export default Contents