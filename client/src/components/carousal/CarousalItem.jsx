// eslint-disable-next-line no-unused-vars
import React from 'react'


function CarousalItem(item,width) {
  return (
   <>
   <div className="carousel-item" style={{width:width}}>
    
    <img src={item.item.icon} alt=""  />
    <div>
    <h1 className='text-2xl md:text-3xl font-bold carousel-item-heading'>{item.item.title}</h1>
    <div className="carousel-item-text md:text-lg text-base">{item.item.description}</div>
    </div>
    <a href={item.item.link} target="_blank" rel="noopener noreferrer" className='grid place-items-center'><button className="buttons button1">Open</button></a>
   </div>

   </>
  )
}

export default CarousalItem